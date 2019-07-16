import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TableComponent } from './components/table/table.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { TablePaginationExampleComponent } from './components/table-pagination-example/table-pagination-example.component';


@NgModule({
  declarations: [
    AppComponent,
    // TableComponent,
    TablePaginationExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
