import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-one-cours",
  templateUrl: "./one-cours.component.html",
  styleUrls: ["./one-cours.component.css"],
})
export class OneCoursComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  id: any = localStorage.getItem("Cid");
  data: any;
  ngOnInit(): void {
    this.http
      .get(`http://localhost:3000/oneCours/${this.id}`)
      .subscribe((data) => {
        console.log(data);
        this.data = data[0];
      });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
