import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page1313',
  templateUrl: './page1313.component.html',
  styleUrls: ['./page1313.component.scss']
})
export class Page1313Component implements OnInit {

  faDatabase = faDatabase;

  constructor() { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");
  }

}
