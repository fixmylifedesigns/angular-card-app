import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PersonComponent } from './person/person.component'

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'person/:id', component: PersonComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
