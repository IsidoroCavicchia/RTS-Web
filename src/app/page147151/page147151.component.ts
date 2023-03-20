import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147151',
  templateUrl: './page147151.component.html',
  styleUrls: ['./page147151.component.scss']
})
export class Page147151Component implements OnInit {

  public toiletId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getToilet();
  }

  getToilet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.toiletId = id;
}

}
