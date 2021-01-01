import { TableStateInterface } from '../../types/table-state-interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  loadTableAction,
  loadTableActionFailure,
  loadTableActionSuccess,
} from '../actions/actions';

const initialState: TableStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const tableReducer = createReducer(
  initialState,
  on(
    loadTableAction,
    (state): TableStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    loadTableActionFailure,
    (state): TableStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    loadTableActionSuccess,
    (state, action): TableStateInterface => ({
      ...state,
      isLoading: false,
      data: action.table,
    })
  )
);

export function reducers(state: TableStateInterface, action: Action) {
  return tableReducer(state, action);
}
