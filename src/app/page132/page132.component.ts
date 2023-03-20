import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page132',
  templateUrl: './page132.component.html',
  styleUrls: ['./page132.component.scss']
})
export class Page132Component implements OnInit {
  public barId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_4.png)");
    this.getBar();
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barId = id;
  }

}
