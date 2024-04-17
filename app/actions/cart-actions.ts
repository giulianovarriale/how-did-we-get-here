'use server';

import * as cartRepository from '../repositories/cart-repository';
import { revalidateTag } from 'next/cache';

export async function addProductToCart(formData: FormData) {
  const productId = Number(formData.get('product-id'));

  cartRepository.addItem(productId);

  revalidateTag('cart');
}
