import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PostService } from '../../../component/posts/post.service';
import { PostI } from '../../models/post.interface';
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titlePost', 'tagsPost', 'actions'];
  dataSource = new MatTableDataSource();
   @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
   @ViewChild(MatSort, {static: true})sort: MatSort;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.postSvc
      .getAllPosts()
      .subscribe(posts => (this.dataSource.data = posts));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onEditPost(post: PostI) {
    console.log('Edit post', post);
    
  }

  onDeletePost(post: PostI) {
    console.log('Delete post', post);
    
    Swal.fire({
      title: 'Estás seguro?',
      text: `No podrás revertir esto`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!'
    }).then(result => {
      if (result.value) {
        // quiere borrarlo
        console.log('Delete');
        this.postSvc.deletePostById(post).then(() => {
          Swal.fire('Borrado!', 'El post ha sido eliminado.', 'success');
        }).catch((error) => {
          Swal.fire('Error!', 'Hubo un error al borrar este post', 'error');
        });
      }
    });


  }

  onNewPost() {
    console.log('New post');
    
  }


}
