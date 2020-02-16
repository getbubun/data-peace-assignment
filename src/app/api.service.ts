import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  currentUser: any;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );
  }

  public set setuser(user: any) {
    this.currentUser = user;
  }

  public get getUser(): any {
    return this.currentUser;
  }
}
