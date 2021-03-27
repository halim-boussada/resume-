import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-add-instractor",
  templateUrl: "./add-instractor.component.html",
  styleUrls: ["./add-instractor.component.css"],
})
export class AddInstractorComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://localhost:3000/instractor").subscribe((data) => {
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
    this.http.post("https://localhost:3000/users", obj).subscribe((data) => {
      Swal.fire("added!", "success");
    });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
