import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:"",
    component:HomeComponent
  },
  { path: "home",
    component:HomeComponent
  },
  { path: "player-details",
    component:PlayerDetailsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
