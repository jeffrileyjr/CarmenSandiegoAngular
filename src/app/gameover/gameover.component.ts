import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ClockService } from '../clock.service';
import { ClueService } from '../clue.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {
  userName: string;
  score = 0;
  scores;

  constructor(private userService: UserService, private clockService: ClockService, private clueService: ClueService) { }

  ngOnInit() {
    this.userName = this.userService.returnUserName();
    console.log(this.userName);
    this.userName = this.userService.userName;
  }

  scoreGame() {
    this.score = this.clockService.score;
    this.clueService.addScore({username: this.userName, score: this.score}).subscribe(response => {
      this.scores = response;
    });
  }
 
}
