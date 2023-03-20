import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1321',
  templateUrl: './page1321.component.html',
  styleUrls: ['./page1321.component.scss']
})
export class Page1321Component implements OnInit {
  public barId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");
    this.getBar();
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barId = id;
  }

}
