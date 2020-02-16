import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { SearchPipe } from "../search.pipe";
import { PagerService } from "../pager.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userList: any = [];
  myFilter: any;
  pager: any = {};
  pagedItems: any = [];
  newList: any = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private pagerService: PagerService
  ) {}

  ngOnInit() {
    this.userData();
  }

  userData() {
    this.apiService.getData().subscribe(data => {
      this.userList = data;
      // this.newList = this.userList;
      this.setPage(1);
    }),
      error => {
        console.error("Some error occured !");
      };
  }

  viewUser(user) {
    this.apiService.setuser = user;
    this.router.navigate(["/user/" + user.id]);
  }

  setPage(page) {
    this.pager = this.pagerService.getPager(this.userList.length, page);

    this.pagedItems = this.userList.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  sort() {
    // this.userList = this.newList.sort(this.sortByFirstName);
    this.newList = this.userList.sort((a, b) => {
      return b.first_name - a.first_name;
    });
    console.log(this.newList);
  }

  sortByFirstName() {}
}
