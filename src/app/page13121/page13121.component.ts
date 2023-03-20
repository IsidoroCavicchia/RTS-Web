import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page13121',
  templateUrl: './page13121.component.html',
  styleUrls: ['./page13121.component.scss']
})
export class Page13121Component implements OnInit {

  faDatabase = faDatabase;

  constructor() { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_6.png)");
  }

}
