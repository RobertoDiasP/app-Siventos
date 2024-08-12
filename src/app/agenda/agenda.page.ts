import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

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
  datai: any
  dataf: any
  dataResultado: any = []
  selectedEvents: any[] = []; 



  selectedEvent: CalendarEvent | null = null;

  events: CalendarEvent[] = [
    { date: new Date(2024, 7, 23), type: 'meeting', title: 'Reunião com equipe', description: 'Discussão sobre o projeto XYZ.' },
    { date: new Date(2024, 7, 23), type: 'holiday', title: 'Feriado Nacional', description: 'Feriado nacional comemorativo.' },
    { date: new Date(2024, 7, 28), type: 'birthday', title: 'Aniversário de João', description: 'Festa de aniversário de João.' }
  ];
  currentEvent: any;

  constructor(private modalCtrl: ModalController,
              private api:ApiService
  ) {}

  ngOnInit(): void {
    this.renderCalendar();
    this.getDataAgenda();
    
    
  }

  convertToEventDate(dateString: string): Date {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); // Adiciona 1 dia
    return date;
  }

  // Função para criar eventos a partir dos dados
  createEventsFromData(dataArray: any[]): CalendarEvent[] {
    return dataArray.map(item => {
      const eventDate = this.convertToEventDate(item.DATA);

      const newEvent: CalendarEvent = {
        date: eventDate,
        type: 'meeting', // Ou outra lógica para definir o tipo baseado nos dados
        title: item.DESCRICAO || 'Evento sem título',
        description: item.LOCAL || ''
      };

      return newEvent;
    });
  }

  // Função chamada ao clicar no botão
  async loadEvents() {
    await this.getDataAgenda();
    const newEvents = this.createEventsFromData(this.dataResultado);
    this.events = [...this.events, ...newEvents]; // Adiciona novos eventos à lista existente
    await this.renderCalendar(); // Atualiza o calendário com os novos eventos
    this.dataResultado = [];

  }

  async getDataAgenda(){  
    this.datai = '01.01.2023'
    this.dataf = '01.12.2024'
    
      try {
        await this.api.getAgendaEventos(this.datai, this.dataf).subscribe(response => {
          this.dataResultado = response
          console.log(this.dataResultado)
          
        })
      } catch (error: any) {
        
      } finally {
        
      }
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
    this.showSelectedDay(day)
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

  showSelectedDay(day: any) {
    const selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day.day);
  
    // Limpa a lista de eventos selecionados
    this.selectedEvents = [];
  
    // Loop para comparar as datas no dataResultado
    this.dataResultado.forEach((event: { DATA: string; }) => {
      const eventDate = this.convertToEventDate(event.DATA);
  
      // Compara se as datas são iguais
      if (
        eventDate.getDate() === selectedDate.getDate() &&
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getFullYear() === selectedDate.getFullYear()
      ) {
        this.selectedEvents.push(event); // Adiciona o evento à lista de eventos selecionados
      }
    });
  
    // Exibe o dia selecionado e os eventos correspondentes no console
    console.log(`Dia selecionado: ${day.day}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`);
    console.log('Eventos selecionados:', this.selectedEvents);
  }

  handleCancel() {
    this.showForm = false;
  }
}
