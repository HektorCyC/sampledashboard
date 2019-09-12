import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { NetworkService } from 'src/app/core/network.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"]
})
export class UserlistComponent implements OnInit {

  dataSource = new MatTableDataSource();

  constructor(private db: AngularFirestore) {
    // this.userListCollectionRef = this.db.collection<UserData>('users');
    // this.user$ = this.userListCollectionRef.valueChanges();
  }

  ngOnInit() {
    return this.db.collection('users').valueChanges().subscribe(val => this.dataSource.data = val)
  }

  displayedColumns: string[] = ["nombre", "email", "provider"];
}
