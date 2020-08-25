import { Store } from './store';

export interface Product {
  id: string,
  name: string,
  store: Store,
  purchasedAt: number,
  imgUrl: string,
  description: string
}