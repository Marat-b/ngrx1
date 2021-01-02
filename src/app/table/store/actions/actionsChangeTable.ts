import { ActionChangeTypes } from './actionChangeTypes';
import { createAction, props } from '@ngrx/store';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';

export const changeTableAction = createAction(ActionChangeTypes.CHANGE_TABLE);

export const changeTableActionSuccess = createAction(
  ActionChangeTypes.CHANGE_TABLE_SUCCESS,
  props<{ table: TableDataInterface }>()
);

export const changeTableActionFailure = createAction(
  ActionChangeTypes.CHANGE_TABLE_FAILURE
);
