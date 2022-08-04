import { Component, OnInit } from '@angular/core';
import { playerCard } from '../core/models/player';
import { PlayerService } from '../core/services/player.service';


@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {

  players: playerCard[] = [];

  constructor(private service: PlayerService) { }

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

  inTheMarket(player: playerCard) {
    player.inMyTeam = false
    this.service.uptadePlayer(player, player.id).subscribe();
  }
}
