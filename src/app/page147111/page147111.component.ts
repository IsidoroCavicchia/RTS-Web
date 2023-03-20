import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147111',
  templateUrl: './page147111.component.html',
  styleUrls: ['./page147111.component.scss']
})
export class Page147111Component implements OnInit {

  public entryId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEntree();
  }

  getEntree(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryId = id;
}

}
