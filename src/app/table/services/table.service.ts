import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { TableDataInterface } from '../../shared/types/TableDataInterface';
import { catchError, map } from 'rxjs/operators';
// import { tableDataResponse } from '../../shared/types/TableDataResponse';
// import { TableDataResponse } from '../../shared/types/TableDataResponse';

@Injectable()
export class TableService {
  // table: TableDataResponse;
  // tableCreated: TableDataInterface;
  constructor(private http: HttpClient) {
    // this.tableCreated = this.table.createTable();
  }

  getData(): Observable<TableDataInterface> {
    const url = '';
    console.log('getData()');
    return this.http.get<TableDataInterface>(url).pipe(
      map(
        (response: TableDataInterface) => {
          return {
            cell11: '11_11',
            cell12: '12_12',
            cell21: '21_21',
            cell22: '22_22',
          };
        },
        catchError(() => {
          console.log('Error in getData');
          // return {
          //   cell11: '11_11',
          //   cell12: '12_12',
          //   cell21: '21_21',
          //   cell22: '22_22',
          // };
          return null;
        })
      )
    );
  }

  getData2(): Observable<TableDataInterface> {
    const url = '';
    console.log('getData2()');
    return this.http.get<TableDataInterface>(url);
  }

  getData3(): Observable<TableDataInterface> {
    const url = '';
    console.log('getData3()');
    const tableDataInterface: TableDataInterface = {
      cell11: '11_11',
      cell12: '12_12',
      cell21: '21_21',
      cell22: '22_22',
    };
    return of(tableDataInterface);
  }
}
