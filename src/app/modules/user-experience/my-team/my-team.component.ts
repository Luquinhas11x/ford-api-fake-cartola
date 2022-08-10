import { Component, OnInit } from '@angular/core';
import { playerCard } from '../../../core/models/player';
import { PlayerService } from '../../../core/services/player.service';


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

}
