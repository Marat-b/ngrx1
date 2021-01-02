import { TableStateInterface } from '../../types/table-state-interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const tableFeatureSelector = createFeatureSelector<TableStateInterface>(
  'change'
);

export const isTableChangingSelector = createSelector(
  tableFeatureSelector,
  (tableState: TableStateInterface) => tableState.isLoading
);

export const errorTableSelector = createSelector(
  tableFeatureSelector,
  (tableState: TableStateInterface) => tableState.error
);

export const dataTableSelector = createSelector(
  tableFeatureSelector,
  (tableState: TableStateInterface) => tableState.data
);
