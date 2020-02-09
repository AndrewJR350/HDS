import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { RegistrationService } from "../registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  size: string = "title";
  role: any = "title";
  phone: any;
  email: string;
  gender: string = "title";
  lastName: string;
  firstName: string;

  constructor(
    private toastr: ToastrService,
    private registrationService: RegistrationService
  ) {}

  isInputsValid = (): boolean => {
    let message = undefined;
    if (!this.firstName) {
      message = "Please enter your first name";
    } else if (!this.lastName) {
      message = "Please enter your last name";
    } else if (!this.email) {
      message = "Please enter your email";
    } else if (!this.phone) {
      message = "Please enter your phone number";
    } else if (!this.gender || this.gender === "title") {
      message = "Please select your gender";
    } else if (!this.role || this.role === "title") {
      message = "Please enter your role";
    } else if (!this.size || this.size === "title") {
      message = "Please enter your T-Shirt size";
    }

    if (message) {
      this.toastr.error(message, "Please fulfil the form");
    }

    return message ? false : true;
  };
  register = async () => {
    if (this.isInputsValid()) {
      const response = await this.registrationService.postRegisterDetails({
        role: this.role,
        size: this.size,
        phone: this.phone,
        email: this.email,
        gender: this.gender,
        firstName: this.firstName,
        lastName: this.lastName
      });
      this.toastr.success(
        "Confirmation has been sent to your mail, please check it.",
        "Success"
      );
    }
  };
  ngOnInit(): void {}
}
