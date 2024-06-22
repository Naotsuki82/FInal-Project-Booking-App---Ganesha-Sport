import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billiard',
  templateUrl: './billiard.page.html',
  styleUrls: ['./billiard.page.scss'],
})
export class BilliardPage implements OnInit {
  private dateValue: any;

  constructor() { }

  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
  
  ngOnInit() {
  }

}


