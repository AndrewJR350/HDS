import { Injectable } from "@angular/core";
import Axios from "axios";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor() {}

  postRegisterDetails(params: any) {
    return Axios.post("http://localhost:3000/register", params, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
