import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCoursCreatorComponent } from "./add-cours-creator/add-cours-creator.component";
import { AddCoursComponent } from "./add-cours/add-cours.component";
import { AddInstractorComponent } from "./add-instractor/add-instractor.component";
import { AdminComponent } from "./admin/admin.component";
import { ManagCoursesComponent } from "./manag-courses/manag-courses.component";

const routes: Routes = [
  { path: "addS", component: AdminComponent },
  { path: "addI", component: AddInstractorComponent },
  { path: "addCC", component: AddCoursCreatorComponent },
  { path: "addC", component: AddCoursComponent },
  { path: "manageC", component: ManagCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
