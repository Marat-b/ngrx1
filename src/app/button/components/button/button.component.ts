import { Component, OnInit } from '@angular/core';
import { loadTableAction } from '../../../table/store/actions/actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  pushMe(): void {
    console.log('Push Me ->', 'I am pushed');
    // this.getTable();
    this.router.navigateByUrl('table');
  }

  getTable(): void {
    this.store.dispatch(loadTableAction());
  }
}
