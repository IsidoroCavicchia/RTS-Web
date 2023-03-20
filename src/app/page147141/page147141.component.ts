import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147141',
  templateUrl: './page147141.component.html',
  styleUrls: ['./page147141.component.scss']
})
export class Page147141Component implements OnInit {

  public serverId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getServeur();
  }

  getServeur(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serverId = id;
}

}
