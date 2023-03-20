import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page1132',
  templateUrl: './page1132.component.html',
  styleUrls: ['./page1132.component.scss']
})
export class Page1132Component implements OnInit {

  public viewModel: Page1132ViewModel;

  constructor(private repo: RepositoryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getModel();

  }

  getModel(){
    this.repo.get('api/page1132')
      .toPromise()
      .then(res => {
        console.log(res);
        this.viewModel = res;
      }).catch();
  }

}

export class Page1132ViewModel{
  public Category: [];
}
