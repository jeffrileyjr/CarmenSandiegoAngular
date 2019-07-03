import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService} from '../user.service';
import { ClueService } from '../clue.service';
import { ClockService } from '../clock.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName: string;
  // isOn: boolean = false;
  stolenGoods;
  startingCity;

  constructor(private route: ActivatedRoute, private userService: UserService, private clueService: ClueService, private clockService: ClockService) { }

  ngOnInit() {
    this.clockService.resetTime();
    this.startingCity = this.clueService.startingCity;
    this.clueService.getStolenGoods(this.startingCity).subscribe(response => {
        this.stolenGoods = response;
        console.log(this.stolenGoods);
      });
    this.userName = this.userService.userName;
    console.log(this.userName);
    // this.stolenGood = this.clueService.stolenGood;
  }


  // onFlip() {
  //   this.isOn = !this.isOn;
  // }

}
