import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TableComponent } from './components/table/table.component';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TablePaginationExampleComponent } from './components/table-pagination-example/table-pagination-example.component';
import { ApiDataSourceComponent } from './components/api-data-source/api-data-source.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // TableComponent,
    TablePaginationExampleComponent,
    ApiDataSourceComponent,
    FilterComponent,
    FilterTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
