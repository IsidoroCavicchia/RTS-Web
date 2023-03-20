import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-incendie',
    templateUrl: './incendie.component.html',
    styleUrls: ['./incendie.component.scss']
})
export class IncendieComponent implements OnInit {

    private BarId: number;

    constructor(private router: Router, private route: ActivatedRoute, private elementRef: ElementRef, private repo: RepositoryService) { }

    ngOnInit() {
        this.getBar();
    }

    getBar(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.BarId = id;
    }

    ActivedAlarm(param): void {
        alert('Alarme activé');
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = param ? 'red' : 'gray';
        let params = new HttpParams().set('param', param);
        this.repo.getWithParameter('api/Alert', { params })
            .subscribe(res => {

            });
    }

}
