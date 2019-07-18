// import { Component, OnInit, ViewChild } from '@angular/core';
// import { DataSource } from '@angular/cdk/collections';
// import { HttpService } from './../../http.service';
// import { Observable } from 'rxjs';
// import { User } from './../../table.model';
// import { MatPaginator, MatTableDataSource } from '@angular/material';

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.scss']
// })
// export class FilterComponent implements OnInit {
//   UserDataSource = MatTableDataSource 
//   dataSource = new UserDataSource(this._httpService);
//   displayedColumns = ["id", "name", "username", "email", "company"]
  
//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
//   constructor(private _httpService:HttpService) { }

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//   }

//   applyFilter(filterValue: string){
//     // this.dataSource.filter = filterValue.trim().toLowerCase();
//   }
// }

// export class UserDataSource extends DataSource<any>{
//   paginator: MatPaginator;
//   constructor(private _httpService:HttpService){
//     super()
//   }

//   connect(): Observable<User[]> {
//     return this._httpService.getUser();
//   }

//   disconnect() {}
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './../../http.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from './../../table.model';
import { MatPaginator, MatTableDataSource, MatSort, MatSortable } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  search:String;
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
  
  clearSearch(){
    this.search = "";
    this.filterInput();
  }
    filterInput(){
      this.dataSource.filter = this.search.trim().toLowerCase(); //where is "filter" on this.dataSource.filter coming from? MatTableDataSource has a property named filter where you assignn a string to this property to filter out the data
    } //filterValue.trim().toLowerCase() is filtering if the input has the certain string making a true/false statement

}
