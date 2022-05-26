import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  calendarOptions: CalendarOptions = {
    locale: esLocale,
    initialView: 'dayGridWeek'
  };

  constructor() { }

  ngOnInit() {
  }

}
