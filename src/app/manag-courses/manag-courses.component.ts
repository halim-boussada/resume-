import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-manag-courses",
  templateUrl: "./manag-courses.component.html",
  styleUrls: ["./manag-courses.component.css"],
})
export class ManagCoursesComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
