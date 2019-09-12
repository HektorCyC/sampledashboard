import { Component, OnInit } from "@angular/core";
import { LottieOptions } from "ngx-lottie";

import { AuthService } from "../../core/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  public options: LottieOptions = {
    path: "https://assets10.lottiefiles.com/packages/lf20_aw0n2o.json"
  };
  constructor(public auth: AuthService, 
    private router: Router) {}

  ngOnInit() {}

  successLogin(){
    this.router.navigate(["/dashboard"]);
  }
}
