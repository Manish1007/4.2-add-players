import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  playerId: string;
  player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      this.getPlayerDetails();
    });
  }

  getPlayerDetails(): void {
    this.playerService.getPlayer(this.playerId).subscribe(player => {
      this.player = player;
    });
  }
}
