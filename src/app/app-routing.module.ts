import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alert-cad',
    loadChildren: () => import('./pagina/alert-cad/alert-cad.module').then( m => m.AlertCadPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pagina/local/local.module').then( m => m.LocalPageModule)
  },
 
  {
    path: 'local2',
    loadChildren: () => import('./local2/local2.module').then( m => m.Local2PageModule)
  },
  {
    path: 'local3',
    loadChildren: () => import('./local3/local3.module').then( m => m.Local3PageModule)
  },  {
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'agendarbarb',
    loadChildren: () => import('./agendarbarb/agendarbarb.module').then( m => m.AgendarbarbPageModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./cliente/agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
