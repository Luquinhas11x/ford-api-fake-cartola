import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../core/services/player.service';
import { playerCard } from '../core/models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  players: playerCard[] = [];

  playerImg: string = ''
  playerTeamImg: string = ''
  playerName: string = ''
  playerTeam: string = ''
  playerNationality: string = ''
  playerPosition: string = ''
  playerHability: string = ''

  toDisplay = false;

  constructor(private service: PlayerService, private route: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    const player = {
      id: new Date().getTime(),
      img: this.playerImg,
      teamImg: this.playerTeamImg,
      name: this.playerName,
      team: this.playerTeam,
      nationality: this.playerNationality,
      position: this.playerPosition,
      hability: this.playerHability,
      readonly: true,
      inMyTeam: false
    }
    this.service.addPlayer(player).subscribe()
    this.players.push(player)
    this.route.navigate(['/exibition'])
  }

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }


}
