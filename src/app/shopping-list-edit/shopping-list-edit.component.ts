import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../interfaces/product';
import { ShoppingListService } from '../services/product.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  dataSource = new MatTableDataSource<Product>([]);
  showSpinner: boolean = true;
  productToAdd = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      purchasedAt: new FormControl(null, [Validators.required]),
      store: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        url: new FormControl(null, [Validators.required])
      })
    },
  );

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit() {
    this.shoppingListService.getShoppingList()
      .subscribe(
        products => {
          this.showSpinner = false;
          this.dataSource.data = products;
        },
        error => {
          this.showSpinner = false;
          console.log(error);
        });
  }

  productSave(form: FormGroupDirective) {
    this.showSpinner = true;
    this.shoppingListService
      .addProduct(this.productToAdd.value);
    this.shoppingListService.showSnackBar(this.productToAdd.value['name'], 'Saved');
    form.resetForm();
    this.showSpinner = false;
  }

  removeProduct(product: Product) {
    this.showSpinner = true;
    this.shoppingListService
      .removeProduct(product);
    this.shoppingListService.showSnackBar(product['name'], 'Removed');
    this.showSpinner = false;
  }
}
