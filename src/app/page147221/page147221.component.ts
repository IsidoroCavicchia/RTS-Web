import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147221',
  templateUrl: './page147221.component.html',
  styleUrls: ['./page147221.component.scss']
})
export class Page147221Component implements OnInit {

  public entryId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEntry();
  }

  getEntry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryId = id;
}

}
