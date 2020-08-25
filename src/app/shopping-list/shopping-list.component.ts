import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../interfaces/product';
import { ShoppingListService } from '../services/product.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'store', 'purchasedAt'];
  dataSource = new MatTableDataSource<Product>([]);
  filters = new FormGroup({
    name: new FormControl(),
    store: new FormControl(),
    purchasedBefore: new FormControl(),
    purchasedAfter: new FormControl()
  });
  showSpinner: boolean = true;

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit() {
    this.shoppingListService.getShoppingList()
      .subscribe(products => {
        this.dataSource.data = products;
        this.showSpinner = false;
      },
        error => {
          this.showSpinner = false;
          console.log(error);
        });

    this.dataSource.filterPredicate =
      (data, filter: any) => {
        if (filter.name
          && !data.name.includes(filter.name)) {
          return false;
        }
        if (filter.store
          && !data.store.name.includes(filter.store)) {
          return false;
        }
        if (filter.purchasedBefore
          && data.purchasedAt > filter.purchasedBefore) {
          return false;
        }
        if (filter.purchasedAfter
          && data.purchasedAt < filter.purchasedAfter) {
          return false;
        }
        return true;
      };

    this.filters.valueChanges
      .subscribe((changes) => {
        this.showSpinner = false;
        this.dataSource.filter = changes;
      },
        error => {
          this.showSpinner = false;
          console.log(error);
        });
  }

  formReset(form: FormGroupDirective) {
    form.resetForm();
  }
}



