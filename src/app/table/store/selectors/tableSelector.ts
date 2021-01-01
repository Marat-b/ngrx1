import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableStateInterface } from '../../types/table-state-interface';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';

export const tableFeatureSelector = createFeatureSelector<TableStateInterface>(
  'tbl'
);

export const isTableLoadingSelector = createSelector(
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
