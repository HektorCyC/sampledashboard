import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

export interface Config {
  user: string;
  postBody: string,
  title: string
}

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  constructor(private http: HttpClient, private db: AngularFirestore) { }

  getRequest(url: string) {
     return this.http.get(url);
  }

  postRequest(url: string, body: Config) {
    return this.http.post(url, body).subscribe(
      data => {
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
