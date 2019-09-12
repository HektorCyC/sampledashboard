import { Component, OnInit } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-inline";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import { NetworkService } from "src/app/core/network.service";
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.component.html",
  styleUrls: ["./addpost.component.scss"]
})
export class AddpostComponent implements OnInit {

  postBody = "<p><h1>¡Hola mundo!</h1></p>";
  title = "¡Hola mundo!";
  user = "John doe";
  public Editor = ClassicEditor;
  constructor(public network: NetworkService, public auth: AuthService) { }
  ngOnInit() {
    this.auth.user$.subscribe(val => this.title = val.displayName);
  }

  onKey({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.postBody = data;
  }
  onTitle(event: any) {
    this.title = event.target.value;
  }
  saveData() {
    event.preventDefault();
    this.network.postRequest("https://tratodemo.herokuapp.com/api", {
      user: this.user,
      postBody: this.postBody,
      title: this.title
    });
  }
}
