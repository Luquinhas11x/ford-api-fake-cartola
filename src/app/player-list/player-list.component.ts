import { Component, Input, OnInit } from '@angular/core';
import { playerCard } from '../core/models/player';
import { PlayerService } from '../core/services/player.service';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService]
})

export class PlayerListComponent implements OnInit {

  @Input() players: playerCard[] = [];

  @Input() status!: boolean;

  msgs: Message[] = [];

  constructor(private service: PlayerService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }



  edit(editedCar: playerCard): void {
    editedCar.readonly = !editedCar.readonly
    this.service.uptadePlayer(editedCar, editedCar.id).subscribe()
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
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
        this.delet(player);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }
}
