import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalData } from '../model-data';

@Component({
    selector: 'app-dialog-result',
    templateUrl: './dialog-result.component.html',
    styleUrls: ['./dialog-result.component.scss']
})
export class DialogResultComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DialogResultComponent>, @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

}
