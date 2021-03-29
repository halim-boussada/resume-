import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { AddInstractorComponent } from "./add-instractor/add-instractor.component";
import { AddCoursCreatorComponent } from "./add-cours-creator/add-cours-creator.component";
import { AddCoursComponent } from "./add-cours/add-cours.component";
import { ManagCoursesComponent } from "./manag-courses/manag-courses.component";
import { OneCoursComponent } from './one-cours/one-cours.component';
import { RbkComponent } from './rbk/rbk.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { StudentFeedComponent } from './student-feed/student-feed.component';
import { InstractorFeedComponent } from './instractor-feed/instractor-feed.component';
import { CcFeedComponent } from './cc-feed/cc-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddInstractorComponent,
    AddCoursCreatorComponent,
    AddCoursComponent,
    ManagCoursesComponent,
    OneCoursComponent,
    RbkComponent,
    VisibilityComponent,
    StudentFeedComponent,
    InstractorFeedComponent,
    CcFeedComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
