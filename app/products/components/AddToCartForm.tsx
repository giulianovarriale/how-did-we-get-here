import { addProductToCart } from '@/app/actions/cart-actions';

export function AddToCartForm({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
  };
}) {
  return (
    <form action={addProductToCart}>
      <input type="hidden" name="product-id" value={product.id} />
      <button
        type="submit"
        className="bg-sky-700 text-white px-6 py-2 flex-grow-0 mt-6"
      >
        Add to cart
      </button>
    </form>
  );
}
