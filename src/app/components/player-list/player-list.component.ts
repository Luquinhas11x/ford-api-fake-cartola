import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { playerCard } from '../../core/models/player';
import { PlayerService } from '../../core/services/player.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `],
  providers: [ConfirmationService, MessageService]
})

export class PlayerListComponent implements OnInit {

  @Input() players: playerCard[] = [];

  @Input() status!: boolean;

  @Output() editionPlayer = new EventEmitter<playerCard>();

  msgs: Message[] = [];

  displayModal!: boolean;

  editing!: playerCard;

  playerName!: string;

  constructor(private service: PlayerService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }


  edit(editedCar: playerCard): void {
    // editedCar.readonly = false;
    this.service.uptadePlayer(editedCar, editedCar.id).subscribe();
    this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Informações atualizadas' });
  }

  backToTrue(): void {
    this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Atualizações canceladas' });
  }

  inMyTeam(player: playerCard) {
    player.inMyTeam = true
    this.service.uptadePlayer(player, player.id).subscribe();
  }

  inTheMarket(player: playerCard) {
    player.inMyTeam = false
    this.service.uptadePlayer(player, player.id).subscribe();
  }

  delet(player: playerCard): void {
    const index: number = this.players.indexOf(player)
    this.service.deletePlayer(player.id).subscribe()
    this.players.splice(index, 1)
  }

  deletPlayer(player: playerCard): void {
    this.confirmationService.confirm({
      message: 'Quer mesmo tirar o ' + player.name + ' da sua escalação?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Deletado', detail: 'Jogador deletado' });
        this.delet(player);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Você cancelou' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected' });
            break;
        }
      }
    });
  }

  showModalDialog(dialogPlayer: playerCard) {
    this.displayModal = true;
    this.editing = dialogPlayer;
  }

  newEdition(value: playerCard){
    this.editionPlayer.emit(value)
    console.log(value)
  }
}

// accept: () => {
//   this.messageService.add({ severity: 'success', summary: 'Deletado', detail: 'Jogador deletado' });
//   this.delet(player);
// },
// reject: () => {
//   this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Você cancelou' });
// }