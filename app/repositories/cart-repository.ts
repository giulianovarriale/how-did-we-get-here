import { cookies } from 'next/headers';

type Cart = {
  items: Array<{ productId: number }>;
};

export async function getCart(): Promise<Cart> {
  const cartCookies = cookies().get('cart')?.value;

  // Make sure you are running the app on localhost:3000
  return fetch('http://localhost:3000/cart/api', {
    next: { tags: ['cart'] },
    headers: {
      // we need to pass the cookies to the request
      // because we're doing a fetch from the server to a route handler
      // and the cookies will be used in there
      cookie: cartCookies ? `cart=${cartCookies}` : '',
    },
  }).then((res) => res.json());
}

export async function addItem(productId: number) {
  const cookiesStore = cookies();
  const cartCookie = cookiesStore.get('cart')?.value;

  if (!cartCookie) {
    cookiesStore.set(
      'cart',
      JSON.stringify({
        items: [{ productId }],
      })
    );
    return;
  }

  const cart = JSON.parse(cartCookie);

  cookiesStore.set(
    'cart',
    JSON.stringify({
      items: cart.items.concat({ productId }),
    })
  );
}
