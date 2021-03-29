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
  data: any;
  count: any = 0;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/courscreator").subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map((e) => {
        if (e.Role === "student") {
          this.count++;
        }
      });
    });
  }
  updateCohort(cohort, id) {
    this.http
      .put(`http://localhost:3000/updateCC/${id}`, { cohort })
      .subscribe((data) => {
        console.log(data);
        Swal.fire("Updated!", "success");
        this.ngOnInit();
      });
  }
  delete(id) {
    this.http.delete(`http://localhost:3000/delete/${id}`).subscribe((data) => {
      console.log(data);
      Swal.fire("deleted!", "success");
      this.ngOnInit();
    });
  }

  add(username, email, password, cohort) {
    var obj = {
      username,
      email,
      password,
      cohort,
      Role: "student",
    };
    this.http.post("http://localhost:3000/users", obj).subscribe((data) => {
      Swal.fire("added!", "success");
      this.ngOnInit();
    });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
