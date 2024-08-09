import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


interface CalendarEvent {
  date: Date;
  type: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  currentDate: Date = new Date();
  days: any[] = [];
  monthYear: string = '';
  year: number = 0;
  showForm = false;
  isEditMode = false;
  
  selectedEvent: CalendarEvent | null = null;

  events: CalendarEvent[] = [
    { date: new Date(2020, 3, 23), type: 'meeting', title: 'Reunião com equipe', description: 'Discussão sobre o projeto XYZ.' },
    { date: new Date(2020, 3, 25), type: 'holiday', title: 'Feriado Nacional', description: 'Feriado nacional comemorativo.' },
    { date: new Date(2020, 3, 28), type: 'birthday', title: 'Aniversário de João', description: 'Festa de aniversário de João.' }
  ];
  currentEvent: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar() {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();

    this.monthYear = this.currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).toUpperCase();
    this.year = year;

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth; i > 0; i--) {
      daysArray.push({ day: lastDayOfPrevMonth - i + 1, otherMonth: true });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === this.currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();

      const event = this.events.find(event =>
        event.date.getDate() === i && 
        event.date.getMonth() === month && 
        event.date.getFullYear() === year
      );

      daysArray.push({ day: i, today: isToday, event: event });
    }

    const remainingDays = 7 - (daysArray.length % 7);
    for (let i = 1; i < remainingDays; i++) {
      daysArray.push({ day: i, otherMonth: true });
    }

    this.days = daysArray;
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
    this.selectedEvent = null; // Limpa o evento selecionado ao mudar de mês
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
    this.selectedEvent = null; // Limpa o evento selecionado ao mudar de mês
  }

  selectEvent(day: any) {
    this.isEditMode = !!day.event;
    this.currentEvent = this.isEditMode ? { ...day.event } : { date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day.day).toISOString(), title: '', type: '', description: '' };
    this.showForm = true;
  }

  handleSave() {
    if (this.isEditMode) {
      const index = this.events.findIndex(event => event.date.getTime() === new Date(this.currentEvent.date).getTime());
      if (index > -1) {
        this.events[index] = { ...this.currentEvent, date: new Date(this.currentEvent.date) };
      }
    } else {
      this.events.push({ ...this.currentEvent, date: new Date(this.currentEvent.date) });
    }

    this.showForm = false;
    this.renderCalendar();
  }

  handleCancel() {
    this.showForm = false;
  }
}
