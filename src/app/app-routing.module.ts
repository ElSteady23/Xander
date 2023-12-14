import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageProtegidoGuard } from './guards/page-protegido.guard';

//Este es el enrutador el cual nos redirecciona a donde queramos
const routes: Routes = [
  {
    //Aquí dejamos sin nada el path para que nos redireccione al login si no tenemos ninguna "entrada"
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    //Aquí le conectamos el guardian
    canActivate: [PageProtegidoGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'not-fund',
    loadChildren: () => import('./pages/not-fund/not-fund.module').then( m => m.NotFundPageModule)
  },
  {
    path: 'volkswagen',
    loadChildren: () => import('./pages/volkswagen/volkswagen.module').then( m => m.VolkswagenPageModule)
  },
  {
    path: 'mitsubishi',
    loadChildren: () => import('./pages/mitsubishi/mitsubishi.module').then( m => m.MitsubishiPageModule)
  },
  {
    path: 'volkswagen',
    loadChildren: () => import('./pages/volkswagen/volkswagen.module').then( m => m.VolkswagenPageModule)
  },
  {
    path: 'mitsubishi',
    loadChildren: () => import('./pages/mitsubishi/mitsubishi.module').then( m => m.MitsubishiPageModule)
  },
  {
    path: 'nissan',
    loadChildren: () => import('./pages/nissan/nissan.module').then( m => m.NissanPageModule)
  },
  {
    path: 'toyota',
    loadChildren: () => import('./pages/toyota/toyota.module').then( m => m.ToyotaPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    //dejamos el not-fund para el final ya que así le indicamos que cualquier otra página que no esté descrita nos redireccione al not-fund
    path: '**', 
    redirectTo: 'not-fund',
    pathMatch: 'full'
  },
 
  
    


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
