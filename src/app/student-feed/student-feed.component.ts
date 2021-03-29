import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-student-feed",
  templateUrl: "./student-feed.component.html",
  styleUrls: ["./student-feed.component.css"],
})
export class StudentFeedComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  Cohort: any = localStorage.getItem("cohort");
  data: any;
  count: any = 0;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/allcourses").subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map((e) => {
        if (e.Cohort === "Cohort 5") this.count++;
      });
    });
  }

  goOneCours(id) {
    localStorage.setItem("Cid", id);
    this.router.navigateByUrl("/oneC");
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
