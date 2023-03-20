import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1611',
  templateUrl: './page1611.component.html',
  styleUrls: ['./page1611.component.scss']
})
export class Page1611Component implements OnInit {

  public caisseId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");

    const id = +this.route.snapshot.paramMap.get('id');
    this.caisseId = id;
  }

}
