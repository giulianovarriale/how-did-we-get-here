import { cookies } from 'next/headers';

export async function GET() {
  const cookiesStore = cookies();
  const cart = cookiesStore.get('cart')?.value;

  console.log({ date: Date.now() });

  console.log({ cart });

  if (!cart) {
    return new Response(JSON.stringify({ items: [] }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(cart, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
