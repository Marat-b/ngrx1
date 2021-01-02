import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadTableAction,
  loadTableActionFailure,
  loadTableActionSuccess,
} from '../actions/actions';
import {
  changeTableAction,
  changeTableActionFailure,
  changeTableActionSuccess,
} from '../actions/actionsChangeTable';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { TableService } from '../../services/table.service';
import { of } from 'rxjs';

@Injectable()
export class ChangeTableEffect {
  changeTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeTableAction),
      mergeMap(() => {
        // console.log('switchMap');
        return this.tableService.getData4().pipe(
          tap(() => {
            console.log('this.tableService.getData4().pipe');
          }),
          map(
            (table: TableDataInterface) => {
              console.log('loadTableActionSuccess table=', table);
              return changeTableActionSuccess({ table });
            },
            catchError(() => {
              return of(changeTableActionFailure());
            })
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private tableService: TableService) {}
}
