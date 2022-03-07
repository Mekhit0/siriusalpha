import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { TEAMComponent } from './team/team.component'

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "main/aboutus", component: AboutUsComponent},
  {path: "main/aboutus/contact", component: ContactComponent},
  {path: "main/aboutus/contact/team", component: TEAMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
