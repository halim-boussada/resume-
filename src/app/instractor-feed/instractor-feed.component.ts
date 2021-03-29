import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-instractor-feed",
  templateUrl: "./instractor-feed.component.html",
  styleUrls: ["./instractor-feed.component.css"],
})
export class InstractorFeedComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  Cohort: any = localStorage.getItem("cohort");
  data: any;
  count: any = 0;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/allcourses").subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map((e) => {
        this.count++;
      });
    });
  }
  hideShow(a, id) {
    this.http
      .post("http://localhost:3000/visibility", { visibility: a, id: id })
      .subscribe((data) => {
        Swal.fire("Updated!", "success");
        this.ngOnInit();
      });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
