import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'card/:id', component: DetailsComponent },
  { path: 'create', component: FormComponent },
  { path: '', component: ListComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
