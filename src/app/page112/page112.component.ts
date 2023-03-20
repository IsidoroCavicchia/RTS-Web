import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page112',
  templateUrl: './page112.component.html',
  styleUrls: ['./page112.component.scss']
})
export class Page112Component implements OnInit {
  public Title: string;
  public caisses: string[] = ['Tarif 1', 'Tarif 2', 'Tarif 3', 'Tarif 4'];
  public tarifVest: any;
  public vest: any;
  public users: any;

  constructor(private translate: TranslateService, private repository: RepositoryService) { }

  ngOnInit() {
    this.translate.get(['page112.title'])
      .subscribe(translation => {
        this.Title = translation['page112.title']
      });

    this.repository.get('api/TarifVestiaire')
      .subscribe(res => {
        this.tarifVest = res;
      });

    this.repository.get('api/Vestiaire')
      .subscribe(res => {
        this.vest = res;
      });

    this.repository.get('api/User')
      .subscribe(res => {
        this.users = res;
      });
  }



}
