import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'Angular';

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    this.name = 'Nguyen';
  }

  onSubmit(form) {
    console.log(form);

  }
}
