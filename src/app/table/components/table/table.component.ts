import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  dataTableSelector,
  errorTableSelector,
  isTableLoadingSelector,
  tableFeatureSelector,
} from '../../store/selectors/tableSelector';
import { TableDataInterface } from '../../../shared/types/TableDataInterface';
import { loadTableAction } from '../../store/actions/actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  isTableLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  tableSubscription: Subscription;
  table: TableDataInterface;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchDataTable();
  }

  ngOnDestroy(): void {
    this.tableSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ->', changes);
    // this.fetchDataTable();
  }

  initializeValues(): void {
    this.isTableLoading$ = this.store.pipe(select(isTableLoadingSelector));
    this.error$ = this.store.pipe(select(errorTableSelector));
  }

  initializeListeners(): void {
    this.tableSubscription = this.store
      .pipe(select(dataTableSelector))
      .subscribe((table: TableDataInterface | null) => {
        // this.table = {
        //   cell11: '111111',
        //   cell12: '12',
        //   cell21: '21',
        //   cell22: '22',
        // };
        this.table = table;
      });
  }

  fetchDataTable(): void {
    this.store.dispatch(loadTableAction());
  }
}
