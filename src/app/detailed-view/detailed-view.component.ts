import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-detailed-view",
  templateUrl: "./detailed-view.component.html",
  styleUrls: ["./detailed-view.component.scss"]
})
export class DetailedViewComponent implements OnInit {
  currentUser: any;
  constructor(private apiService: ApiService, private location: Location) {}

  ngOnInit() {
    this.currentUser = this.apiService.getUser;
    if(localStorage.getItem('user')){
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
  }

  goBack() {
    this.location.back();
  }
}
