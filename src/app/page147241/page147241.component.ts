import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147241',
  templateUrl: './page147241.component.html',
  styleUrls: ['./page147241.component.scss']
})
export class Page147241Component implements OnInit {

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
