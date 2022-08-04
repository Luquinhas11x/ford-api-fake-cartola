import { Component, OnInit } from '@angular/core';
import { playerCard } from '../core/models/player';
import { PlayerService } from '../core/services/player.service';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-exibition',
  templateUrl: './exibition.component.html',
  styleUrls: ['./exibition.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService]
})

export class ExibitionComponent implements OnInit {

  players: playerCard[] = [];

  msgs: Message[] = [];

  playerImg: string = ''
  playerTeamImg: string = ''
  playerName: string = ''
  playerTeam: string = ''
  playerNationality: string = ''
  playerPosition: string = ''
  playerHability: string = ''

  constructor(private service: PlayerService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getplayers();
  }

  getplayers(): void {
    this.service.getall().subscribe(players => {
      this.players = players
    })
  }

  delet(player: playerCard): void {
    const index: number = this.players.indexOf(player)
    this.service.deletePlayer(player.id).subscribe()
    this.players.splice(index, 1)
  }

  edit(editedCar: playerCard): void {
    editedCar.readonly = !editedCar.readonly
    this.service.uptadePlayer(editedCar, editedCar.id).subscribe()
  }

  inMyTeam(player: playerCard) {
    player.inMyTeam = true
    this.service.uptadePlayer(player, player.id).subscribe();
  }

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}


