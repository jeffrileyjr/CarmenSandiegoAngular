import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, } from '../user.service';
import { ClueService } from '../clue.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private userService: UserService, private clueService: ClueService) { }

  shouldBeShown: boolean = true;
  userName: string;

  ngOnInit() { }

  startGame() {
    this.clueService.setLocation1();
    this.clueService.setLocation2();
    this.clueService.setLocation3();
    this.clueService.setFinalCity();
    this.clueService.setLoc1Clues();
    this.clueService.setLoc2Clues();
    this.clueService.setLoc3Clues();
  }

  toggleDisplay() :void {
    this.shouldBeShown = !this.shouldBeShown;
  }

  setUserName(form){
  console.log(form);
  this.userService.getUserName(form);
  this.startGame();
  console.log(this.userName);
  // return this.userName
  }

}

