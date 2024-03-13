import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'deck',
    loadChildren: () => import('./deck/deck.module').then( m => m.DeckPageModule)
  },  {
    path: 'pdv',
    loadChildren: () => import('./pdv/pdv.module').then( m => m.PdvPageModule)
  },
  {
    path: 'contaspagar',
    loadChildren: () => import('./contaspagar/contaspagar.module').then( m => m.ContaspagarPageModule)
  },
  {
    path: 'contasreceber',
    loadChildren: () => import('./contasreceber/contasreceber.module').then( m => m.ContasreceberPageModule)
  },
  {
    path: 'fluxocaixa',
    loadChildren: () => import('./fluxocaixa/fluxocaixa.module').then( m => m.FluxocaixaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
