import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/core/network.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

export interface PostBody {
  user: string;
  title: string;
  postBody: string;
}


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss']
})

export class PostslistComponent implements OnInit {
  dataSource = new MatTableDataSource();
  private entries: PostBody[] = [];
  constructor(private network: NetworkService) {
  }

  ngOnInit() {
    this.network.getRequest('https://tratodemo.herokuapp.com/api').subscribe((res: PostBody[]) => {
      this.dataSource.data = res.documents;
    });
  }
  displayedColumns: string[] = ["nombre", "titulo"];
}