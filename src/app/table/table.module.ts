import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/tableReducer';
// import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TableEffect } from './store/effects/table.effect';
import { TableService } from './services/table.service';
import { ChangeTableEffect } from './store/effects/change-table.effect';
import { tableChangeReducers } from './store/reducers/tableChangeReducer';

const routes = [
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tbl', reducers),
    StoreModule.forFeature('change', tableChangeReducers),
    EffectsModule.forFeature([TableEffect, ChangeTableEffect]),
    // ReactiveFormsModule,
  ],
  providers: [TableService],
  exports: [RouterModule],
})
export class TableModule {}
