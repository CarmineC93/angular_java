import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardService } from 'src/app/core/services/route-guard.service';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'articoli', component: ArticoliComponent, canActivate:[RouteGuardService]},
  {path:'articoli/grid', component: GridArticoliComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
