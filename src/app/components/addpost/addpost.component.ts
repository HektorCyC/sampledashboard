import { Component, OnInit } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-inline";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular";
import { NetworkService } from "src/app/core/network.service";

@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.component.html",
  styleUrls: ["./addpost.component.scss"]
})
export class AddpostComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor(public network: NetworkService) {}

  ngOnInit() {}
  onKey({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }
  saveData() {
    event.preventDefault();
    this.network.postRequest("https://tratodemo.herokuapp.com/api", {
      user: "Fantas",
      postBody: "BODIX",
      title: "Titulo"
    });
  }
}
