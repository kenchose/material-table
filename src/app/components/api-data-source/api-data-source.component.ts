import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './../../http.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from './../../table.model';
import { MatPaginator, MatTableDataSource, MatSort, MatSortable } from '@angular/material';

@Component({
  selector: 'app-api-data-source',
  templateUrl: './api-data-source.component.html',
  styleUrls: ['./api-data-source.component.scss']
})
export class ApiDataSourceComponent implements OnInit {
  
  dataSource: MatTableDataSource<User>;
  // dataSource = new UserDataSource(this._httpService);
  displayedColumns = ["id", "name", "username", "email", "company"]
  
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private _httpService:HttpService) { }
  
  ngOnInit() {
    this._httpService.getUser().subscribe(data => {
      if(!data){
        return;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator;
    })
  }
  
}

// export class UserDataSource extends DataSource<any> {
//   paginator: MatPaginator;
//   constructor(private _httpService:HttpService) {
//     super();
//   }

//   connect(): Observable<User[]>{
//     return this._httpService.getUser();
//   }

//   disconnect() {}
// }