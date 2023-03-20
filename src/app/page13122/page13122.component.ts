import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page13122',
  templateUrl: './page13122.component.html',
  styleUrls: ['./page13122.component.scss']
})
export class Page13122Component implements OnInit {

  faDatabase = faDatabase;

  constructor() { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_6.png)");
  }

}
