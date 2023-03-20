import { Component, OnInit, ElementRef } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-alert-incendie',
  templateUrl: './alert-incendie.component.html',
  styleUrls: ['./alert-incendie.component.scss']
})
export class AlertIncendieComponent implements OnInit {

    constructor(private repo: RepositoryService, private elementRef: ElementRef) {
        setInterval(() => {
            this.repo.get('api/Alert').subscribe(res => {
                if (res == true)
                    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
                else
                    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'gray';
            })
        }, 10000);
    }

  ngOnInit() {
  }

}
