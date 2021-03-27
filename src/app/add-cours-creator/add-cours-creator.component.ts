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
