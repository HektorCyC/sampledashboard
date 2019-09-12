import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {

  dataSource = new MatTableDataSource();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    return this.db.collection('users').valueChanges().subscribe((val) => {
      this.dataSource.data = val;
    })
  }

  displayedColumns: string[] = ["nombre", "email", "provider"];
}
