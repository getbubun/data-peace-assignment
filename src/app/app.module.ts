import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DetailedViewComponent } from "./detailed-view/detailed-view.component";

import { ApiService } from "./api.service";
import { SearchPipe } from "./search.pipe";
// import { HighlightPipe } from "./highlight.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedViewComponent,
    SearchPipe
    // HighlightPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
