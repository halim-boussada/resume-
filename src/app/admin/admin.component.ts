import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:3000/students").subscribe((data) => {
      console.log(data);
    });
  }
  add(username, email, password, cohort) {
    var obj = {
      username,
      email,
      password,
      cohort,
      Role: "instractor",
    };
    this.http.post("http://localhost:3000/users", obj).subscribe((data) => {
      Swal.fire("added!", "success");
    });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
