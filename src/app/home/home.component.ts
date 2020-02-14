import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { SearchPipe } from "../search.pipe";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userList: any;
  myFilter: any;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.userData();
  }

  userData() {
    this.apiService.getData().subscribe(data => {
      this.userList = data;
    }),
      error => {
        console.error("Some error occured !");
      };
  }

  viewUser(user) {
    this.apiService.setuser = user;
    this.router.navigate(["/user/" + user.id]);
  }
}
