import { Component, OnInit } from '@angular/core';
import { playerCard } from '../../../core/models/player';
import { PlayerService } from '../../../core/services/player.service';
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

  // playerImg: string = ''
  // playerTeamImg: string = ''
  // playerName: string = ''
  // playerTeam: string = ''
  // playerNationality: string = ''
  // playerPosition: string = ''
  // playerHability: string = ''

  constructor(private service: PlayerService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getplayers();
  }

  getplayers(): void {
    this.service.getall().subscribe(players => {
      this.players = players
    })
  }

  newPlayer(newInfo: playerCard){
    this.service.uptadePlayer(newInfo, newInfo.id).subscribe();
  }


}


