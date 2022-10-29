import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { PostI } from '../../../shared/models/post.interface'
import { PostService } from './../../posts/post.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }
  
ngOnInit(): void {
  this.posts$ = this.postSvc.getAllPosts();
}

}
