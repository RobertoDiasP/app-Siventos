import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate: [AuthGuard],  
  },
  {
    path: 'deck',
    loadChildren: () => import('./deck/deck.module').then( m => m.DeckPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'pdv',
    loadChildren: () => import('./pdv/pdv.module').then( m => m.PdvPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'contaspagar',
    loadChildren: () => import('./contaspagar/contaspagar.module').then( m => m.ContaspagarPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'contasreceber',
    loadChildren: () => import('./contasreceber/contasreceber.module').then( m => m.ContasreceberPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'fluxocaixa',
    loadChildren: () => import('./fluxocaixa/fluxocaixa.module').then( m => m.FluxocaixaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'nova-pagina',
    loadChildren: () => import('./nova-pagina/nova-pagina.module').then( m => m.NovaPaginaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'flashcards',
    loadChildren: () => import('./flashcards/flashcards.module').then( m => m.FlashcardsPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'item-flash/:id',
    loadChildren: () => import('./item-flash/item-flash.module').then( m => m.ItemFlashPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'financeiro/:id/:razao',
    loadChildren: () => import('./financeiro/financeiro.module').then( m => m.FinanceiroPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
