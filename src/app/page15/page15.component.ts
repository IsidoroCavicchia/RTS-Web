import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page15',
  templateUrl: './page15.component.html',
  styleUrls: ['./page15.component.scss']
})
export class Page15Component implements OnInit {

  public Bars: BarViewModel[] = [];

  constructor(private router: Router, private repo: RepositoryService) { }

  ngOnInit() {
    this.repo.get('api/bar')
    .toPromise().then(res => {
        this.Bars = res;
        console.log(this.Bars);
    });
  }

}

export class BarViewModel{
  public BarId: number;
  public BarName: string;
  public IsActive: boolean;
  public UserId: string;
}
