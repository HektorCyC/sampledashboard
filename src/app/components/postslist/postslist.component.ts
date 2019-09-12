import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/core/network.service';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PostBody {
  documents: Array<string>;
}


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss']
})

export class PostslistComponent implements OnInit {
  dataSource = new MatTableDataSource();
  constructor(private network: NetworkService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.network.getRequest('https://tratodemo.herokuapp.com/api').subscribe((res: PostBody) => {
      this.dataSource.data = res.documents;
    });
  }
  displayedColumns: string[] = ["nombre", "titulo", "action"];


  openModal(id: number) {
    // const dialogRef = this.dialog.open()
  }

  deletePost(id: number){
    this.network.deletePost(id).subscribe();
  }
}