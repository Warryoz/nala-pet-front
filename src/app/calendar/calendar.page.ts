import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  CalendarOptions,
  Calendar,
} from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { ModalController } from '@ionic/angular';
import { CalendarViews } from './calendar-views';

@Component({
  selector: 'nala-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit,AfterViewInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  showCalendar = false;
  readonly calendarViews = CalendarViews;
  events: [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      start: '',
      center: 'title',
      end: '',
    },
    views: {
      dayGridMonth: {
        displayEventTime: false,
      },
      threeDayWeek: {
        type: 'timeGridWeek',
        displayEventTime: false,
        duration: { days: 3 },
        buttonText: '3 dias',
      },
    },
    initialView: 'dayGridMonth',
    height: '100%',
    contentHeight: 'auto',
    locale: esLocale,
    nowIndicator: true,
    selectable: true,
    select: this.addNewEvent.bind(this),
    eventClick: this.editNewEvent.bind(this),
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      omitZeroMinute: true,
      hour12: false,
    },
    events: [
      {
        id: 'a', // this object will be "parsed" into an Event Object
        title: 'Comida Nala', // a property!
        start: '2022-06-04 00:00:00',
      },
      {
        id: 'a2', // this object will be "parsed" into an Event Object
        title: 'Comida Nala', // a property!
        start: '2022-06-04 10:00:00',
      },
    ],
    eventColor: '#5e17eb',
    eventBackgroundColor: '#5e17eb',
    eventBorderColor: '#5e17eb',
    eventTextColor: '#fff',
    eventDisplay: 'block',
    progressiveEventRendering: true,
  };
  constructor(private readonly modalController: ModalController) {}
  ngOnInit(): void {
    console.log('calendar');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      this.showCalendar = true;
    }, 2000);
  }

  getAllEvents(){
    return this.events;
  }

  addNewEvent(event) {
    console.log('newwww');
    console.log(event);
  }

  editNewEvent() {
    console.log('edit');
  }

  changeView(view: CalendarViews) {
    const calendarApi: Calendar = this.calendarComponent.getApi();
    calendarApi.changeView(view);
  }
  next(){
    const calendarApi: Calendar = this.calendarComponent.getApi();
    calendarApi.next();
  }
  previous(){
    const calendarApi: Calendar = this.calendarComponent.getApi();
    calendarApi.prev();
  }

  hideCalendar(){
    this.showCalendar = !this.showCalendar;
  }
}
