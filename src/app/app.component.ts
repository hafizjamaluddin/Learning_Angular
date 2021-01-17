import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular 6 Projects !";
  todaydate;
  componentproperty;
  fname;
  lname;
  formdata;
  email;

  onClickSubmit(data) {
    alert(
      "Entered Full Name : " +data.fname +" " +data.lname +"\nEntered Email : " +data.email
    );
  }
}
