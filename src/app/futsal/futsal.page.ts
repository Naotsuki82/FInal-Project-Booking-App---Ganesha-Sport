import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futsal',
  templateUrl: './futsal.page.html',
  styleUrls: ['./futsal.page.scss'],
})
export class FutsalPage implements OnInit {
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


export class DatePicker {
  private dateValue: any;

  constructor() {}

  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
}