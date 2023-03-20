import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147131',
  templateUrl: './page147131.component.html',
  styleUrls: ['./page147131.component.scss']
})
export class Page147131Component implements OnInit {

  public barId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBar();
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.barId = id;
}

}
