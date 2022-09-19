import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
      {
        id: '1',
        titlePost: 'Post One',
        contentPost: 'Vivamus sit amet interdum ligula, scelerisque cursus nulla. Aenean eget leo semper,',
        imagePost: 'https://picsum.photos/id/237/200/300'
      },
      {
        id: '2',
        titlePost: 'Post Two',
        contentPost: 'Vivamus sit amet interdum ligula, '
      ,
        imagePost: 'https://picsum.photos/id/237/200/300'
      },
      {
        id: '3',
        titlePost: 'Post Tree',
        contentPost: 'Vivamus sit amet interdum ligula, '
      ,
        imagePost: 'https://picsum.photos/id/237/200/300'
      },
      {
        id: '4',
        titlePost: 'Post Four',
        contentPost: 'Vivamus sit amet interdum ligula, '
      ,
        imagePost: 'https://picsum.photos/id/237/200/300'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
