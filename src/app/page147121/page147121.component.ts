import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page147121',
  templateUrl: './page147121.component.html',
  styleUrls: ['./page147121.component.scss']
})
export class Page147121Component implements OnInit {

  public vestiaireId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getVestiaire();
  }

  getVestiaire(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vestiaireId = id;
}

}
