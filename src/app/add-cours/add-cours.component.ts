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
  addCours(content, nameCours, videoUrl, imageUrl, Cohort) {
    var obj = {
      content: content,
      nameCours: nameCours,
      videoUrl: videoUrl,
      imageUrl: imageUrl,
      Cohort: Cohort,
      Creator: "admin",
    };
    console.log(obj);
    this.http.post("http://localhost:3000/Cours", obj).subscribe((data) => {
      Swal.fire("added!", "success");
      this.ngOnInit();
    });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
