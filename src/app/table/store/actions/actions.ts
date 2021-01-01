import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { ITableRequest } from '../../types/table-request-interface';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';

export const loadTableAction = createAction(ActionTypes.LOAD_TABLE);

export const loadTableActionSuccess = createAction(
  ActionTypes.LOAD_TABLE_SUCCESS,
  props<{ table: TableDataInterface }>()
);

export const loadTableActionFailure = createAction(
  ActionTypes.LOAD_TABLE_FAILURE
);
