import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailedViewComponent } from "./detailed-view/detailed-view.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user/:id", component: DetailedViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
