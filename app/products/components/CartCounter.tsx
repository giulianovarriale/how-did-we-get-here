import * as cartRepository from '../../repositories/cart-repository';

export async function CartCounter() {
  const cart = await cartRepository.getCart();

  return <span>Cart items: {cart.items.length}</span>;
}
