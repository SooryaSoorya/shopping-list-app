import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppConfig } from '../config/app.config';
import { Product } from '../interfaces/product';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private initiated = false;
  private shoppingList = new ReplaySubject<Product[]>(1);
  private products: Product[] = [
    {
      id: "1011793372",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/604900/1011793372/stock-photo-lady-evening-dress-elegant-woman-in-long-gown-with-tail-fashion-model-isolated-on-white-1011793372.jpg",
      description: "Lady Evening Dress, Elegant Woman in Long Gown with Tail, Fashion Model Isolated on White, beautiful well dressed girl",
      name: "Lady Evening Dress",
      purchasedAt: 1569760019000,
      store: {
        name: "Store 1",
        url: "https://www.google.com/"
      }
    },
    {
      id: "1039704586",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/186673278/1039704586/stock-photo-full-length-studio-shot-of-gorgeous-slim-woman-with-long-wavy-hair-posing-in-casual-white-dress-and-1039704586.jpg",
      description: "Full length studio shot of gorgeous slim woman with long wavy hair posing in casual white dress and black high heels holding arm on hip and looking at camera. isolate on grey background.",
      name: "Full length studio shot",
      purchasedAt: 1569760019000,
      store: {
        name: "Store 2",
        url: "https://www.google.com/"
      }
    },
    {
      id: "1054745102",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/1089299/1054745102/stock-photo-strapless-flower-pattern-summer-dress-1054745102.jpg",
      description: "strapless flower pattern summer dress",
      name: "strapless flower pattern summer dress",
      purchasedAt: 1517760019000,
      store: {
        name: "Store 2",
        url: "https://www.google.com/"
      }
    },
    {
      id: "1618440550",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/251517322/1618440550/stock-photo-peach-vintage-fashion-long-maxi-dress-chiffon-ruffle-neck-bridesmaid-wedding-luxury-dress-tailor-1618440550.jpg",
      description: "Peach vintage fashion long maxi dress chiffon ruffle neck bridesmaid wedding luxury dress tailor made by a dressmaker, a dress on mannequin sewing dress form in the plain room",
      name: "Peach vintage fashion long maxi dress",
      purchasedAt: 1559760019000,
      store: {
        name: "Store 3",
        url: "https://www.google.com/"
      }
    },
    {
      id: "325119833",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/2223650/325119833/stock-photo-green-dress-with-belt-on-a-white-background-325119833.jpg",
      description: "Green dress with belt on a white background",
      name: "Green dress",
      purchasedAt: 1559760019000,
      store: {
        name: "Store 4",
        url: "https://www.google.com/"
      }
    },
    {
      id: "572770108",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/580987/572770108/stock-photo-full-length-of-beautiful-little-girl-in-dress-standing-and-posing-over-white-background-572770108.jpg",
      description: "Full length of beautiful little girl in dress standing and posing over white background",
      name: "Full length dress ",
      purchasedAt: 1569760019000,
      store: {
        name: "Store 4",
        url: "https://www.google.com/"
      }
    },
    {
      id: "586585175",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/1835558/586585175/stock-photo-pretty-young-sexy-model-female-with-dark-hair-in-amazing-long-red-dress-and-black-shoes-posing-in-586585175.jpg",
      description: "Pretty young sexy model female with dark hair in amazing long red dress and black shoes posing in dark studio",
      name: "long red dress",
      purchasedAt: 1579160019000,
      store: {
        name: "Store 5",
        url: "https://www.google.com/"
      }
    },
    {
      id: "777983035",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/2693941/777983035/stock-photo-fashion-beautiful-lady-in-floral-summer-dress-long-hair-makeup-model-girl-with-fashionable-777983035.jpg",
      description: "Fashion. Beautiful Lady in floral summer dress, long hair, makeup. Model girl with fashionable clutch bag on blue. Pretty blonde woman in fashion sunglasses, trendy hairstyle, summertime outfit",
      name: "floral summer dress",
      purchasedAt: 1549760019000,
      store: {
        name: "Store 5",
        url: "https://www.google.com/"
      }
    },
    {
      id: "1018670416",
      imgUrl: "https://image.shutterstock.com/display_pic_with_logo/571009/1018670416/stock-photo-full-body-portrait-of-gorgeous-young-brunette-woman-dressed-in-exquisite-nude-ball-gown-with-lace-1018670416.jpg",
      description: "Full body portrait of gorgeous young brunette woman dressed in exquisite nude ball gown with lace top. Attractive female model in elegant strapless dress posing against white wall on background.",
      name: "Ball Gown dress",
      purchasedAt: 1589960019000,
      store: {
        name: "Store 5",
        url: "https://www.google.com/"
      }
    }
  ];

  constructor(
    private mockService: MockService,
    private snackBar: MatSnackBar
  ) { }

  addProduct(product: Product) {
    this.initiateProducts();
    this.products.push(product);
    this.pushProducts();
  }

  getShoppingList(): Observable<Product[]> {
    this.initiateProducts();
    return this.shoppingList;
  }

  removeProduct(product: Product) {
    this.initiateProducts();
    this.products.splice(this.products.indexOf(product), 1);
    this.pushProducts();
  }

  showSnackBar(name, action): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(`${name} ${action}`, 'OK', config);
  }

  private initiateProducts() {
    if (!this.initiated) {
      this.mockService.mockRequest(this.products)
        .subscribe(data => {
          this.shoppingList.next(data);
        },
          error => {
            console.log(error);
          });
      this.initiated = true;
    }
  }

  private pushProducts() {
    this.shoppingList.next(this.products);
  }
}
