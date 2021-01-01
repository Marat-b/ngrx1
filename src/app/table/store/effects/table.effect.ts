import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  loadTableAction,
  loadTableActionFailure,
  loadTableActionSuccess,
} from '../actions/actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TableService } from '../../services/table.service';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';
import { of } from 'rxjs';

@Injectable()
export class TableEffect {
  table$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTableAction),
      mergeMap(() => {
        // console.log('switchMap');
        return this.tableService.getData3().pipe(
          tap(() => {
            console.log('this.tableService.getData().pipe');
          }),
          map(
            (table: TableDataInterface) => {
              console.log('loadTableActionSuccess table=', table);
              return loadTableActionSuccess({ table });
            },
            catchError(() => {
              return of(loadTableActionFailure());
            })
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private tableService: TableService) {}
}
