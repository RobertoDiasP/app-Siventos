import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.page.html',
  styleUrls: ['./pdv.page.scss'],
})
export class PdvPage implements OnInit {
  empresas: any

  constructor(
      private auth: ApiService
  ) { }

  ngOnInit() {

  }

  

}
