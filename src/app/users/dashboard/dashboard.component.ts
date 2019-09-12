import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../core/auth.service";
import { NetworkService } from "../../core/network.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }
  

  }