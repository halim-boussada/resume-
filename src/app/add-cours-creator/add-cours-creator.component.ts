import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-add-cours-creator",
  templateUrl: "./add-cours-creator.component.html",
  styleUrls: ["./add-cours-creator.component.css"],
})
export class AddCoursCreatorComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  data: any;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/courscreator").subscribe((data) => {
      console.log(data);
      this.data = data;
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
      Role: "coursCreator",
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
