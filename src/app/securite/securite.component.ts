import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-securite',
    templateUrl: './securite.component.html',
    styleUrls: ['./securite.component.scss']
})
export class SecuriteComponent implements OnInit {

    public BarId: number;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getBar();
    }

    getBar(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.BarId = id;
    }

}
