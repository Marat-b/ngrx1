import { TableStateInterface } from '../../types/table-state-interface';
import { Action, createReducer, on } from '@ngrx/store';
import { changeTableAction } from '../actions/actionsChangeTable';
import {
  changeTableActionFailure,
  changeTableActionSuccess,
} from '../actions/actionsChangeTable';

const initialState: TableStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const tableChangeReducer = createReducer(
  initialState,
  on(
    changeTableAction,
    (state): TableStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    changeTableActionFailure,
    (state): TableStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    changeTableActionSuccess,
    (state, action): TableStateInterface => ({
      ...state,
      isLoading: false,
      data: action.table,
    })
  )
);

export function tableChangeReducers(
  state: TableStateInterface,
  action: Action
) {
  return tableChangeReducer(state, action);
}
