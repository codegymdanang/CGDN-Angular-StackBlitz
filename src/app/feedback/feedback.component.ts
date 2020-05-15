import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector : 'app-feedback',
    templateUrl : './feedback.component.html',
    styleUrls : ['./feedback.component.css']
})

export class FeedbackComponent {

    rfContact: FormGroup;
    constructor() { }

    ngOnInit() {
        this.rfContact = new FormGroup({
            contactName: new FormControl('', Validators.required),
            email: new FormControl(),
            social: new FormGroup({
                facebook: new FormControl(),
                twitter: new FormControl(),
                website: new FormControl()
            }),
            tel: new FormControl()
        });
    }

    onSubmit() {
        // Do something awesome
        console.log(this.rfContact);
    }


}