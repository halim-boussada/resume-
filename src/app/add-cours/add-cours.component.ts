import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-add-cours",
  templateUrl: "./add-cours.component.html",
  styleUrls: ["./add-cours.component.css"],
})
export class AddCoursComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
