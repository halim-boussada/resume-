import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cc-feed",
  templateUrl: "./cc-feed.component.html",
  styleUrls: ["./cc-feed.component.css"],
})
export class CcFeedComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  Cohort: any = localStorage.getItem("cohort");
  data: any;
  count: any = 0;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/allcourses").subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map((e) => {
        this.count++;
      });
    });
  }
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
  goOneCours(id) {
    localStorage.setItem("Cid", id);
    this.router.navigateByUrl("/oneC");
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
