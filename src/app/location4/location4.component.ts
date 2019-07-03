import { Component, OnInit } from '@angular/core';
import { ClueService } from '../clue.service';
import { PexelApiService } from '../pexel-api.service';
import { ClockService } from '../clock.service';
import { UserService } from '../user.service';
@Component({
  selector: 'location4',
  templateUrl: './location4.component.html',
  styleUrls: ['./location4.component.css']
})
export class Location4Component implements OnInit {


  userName: string;
  clueNumber = -2;  // variable that is used for ngIfs to only show one pop-up message/clue at a time
  time; // for timer, hold the remaining time.
  clues;  // array to hold our clues 
  tempClueNumber = 0;  // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
  flight = false;  //  used to toggle flight screen or not
  nextCity = 'Detroit';  // what the next city location is
  currentCity = 'Dubai';  // current city
  photoURL; // variable to hold URL for random background photo
  localClues;  // array to hold shuffled array of clues
  randomPhoto: number = Math.floor((Math.random() * 9));  // used to get a random index number for background photo
  randomDetroitPhoto: number = Math.floor((Math.random() * 2));  // detroit only had 3 photos, this selects on of those
  redHerring; // a fake out location that is similar to the next city
  wrongLocation;  // a randomw wrong option
  score;
  scores;

  constructor(private userService: UserService,private clueService: ClueService, private pexelService: PexelApiService, private clockService: ClockService) { }
  
  scoreGame() {
    this.clockService.scoreGame();
    this.score = this.clockService.score;
    this.userName = this.userService.userName;
    this.clueService.addScore({username: this.userName, score: this.score}).subscribe(response => {
      this.scores = response;
    });
  }
  // method that increases clueNumber so we can show the next clue
  showClue() {
    this.clueNumber = 0;
    this.clockService.onClue();
    this.time = this.clockService.getTime();
    // console.log(this.clueNumber);
  }
  // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
  flyOut() {
    this.tempClueNumber = this.clueNumber;
    this.clueNumber = -1;
    this.flight = true;
  }
  // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
  goBack() {
    this.clueNumber = this.tempClueNumber;
    this.flight = !this.flight;
  }
  // increase clueNumber to display next clue
  nextClue() {
    this.clueNumber++;
    this.clockService.onClue();
    this.time = this.clockService.getTime();
  }


  ngOnInit() {
    this.time = this.clockService.getTime();
    this.userName = this.userService.userName;
    this.scoreGame();
  }
}
