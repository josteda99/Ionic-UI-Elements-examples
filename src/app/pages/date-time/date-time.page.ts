import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  customYearValues = [2025, 2020, 2061, 2016, 2088, 1996];
  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: (event) => {
          console.log(event);
        },
      },
      {
        text: 'mundo',
        handler: () => {
          console.log('hola');
        },
      },
    ],
  };
  constructor() {}

  ngOnInit() {}

  cambioFecha(event) {
    console.log(event.detail.value);
  }
}
