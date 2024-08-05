import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage implements OnInit {
  constructor(
    private ApiService: ApiService,
    private router: Router
  ){
    
  }
  
  Tipocards: any = []
  

  ngOnInit() {
    this.ApiService.getTipoCards().subscribe(data => this.Tipocards = data )
    console.log(this.Tipocards)

  }

  navegarParaDetalhes(itemId: number) {
    this.router.navigate(['/item-flash', itemId]);
  }
  

 
  
}
