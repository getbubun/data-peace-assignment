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
  desc: boolean  ;
  

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

  sort(item) {
    this.desc = !this.desc;
    switch(item){
      case "first_name":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.first_name > b.first_name) ? -1 : 1) : ((a.first_name > b.first_name) ? 1 : -1)
        })
        break;
      case "last_name":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.last_name > b.last_name) ? -1 : 1) : ((a.last_name > b.last_name) ? 1 : -1)
        })
        break;
      case "company_name":
        this.pagedItems.sort((a, b) =>{
          return this.desc ? ((a.company_name > b.company_name) ? -1 : 1) : ((a.company_name > b.company_name) ? 1 : -1)
        })
        break;
      case "city":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.city > b.city) ? -1 : 1) : ((a.city > b.city) ? 1 : -1)
        })
          
        break;    
      case "state":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.state > b.state) ? -1 : 1) : ((a.state > b.state) ? 1 : -1)
        })
        break;
      case "zip":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.zip > b.zip) ? -1 : 1) : ((a.zip > b.zip) ? 1 : -1)
        })
        break;
      case "email":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.email > b.email) ? -1 : 1) : ((a.email > b.email) ? 1 : -1)
        })
        break; 
      case "age":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.age > b.age) ? -1 : 1) : ((a.age > b.age) ? 1 : -1)
        })
        break;
      case "web":
        this.pagedItems.sort((a, b) => {
          return this.desc ? ((a.web > b.web) ? -1 : 1) : ((a.web > b.web) ? 1 : -1)
        })
        break;

    }


   
  }


}
