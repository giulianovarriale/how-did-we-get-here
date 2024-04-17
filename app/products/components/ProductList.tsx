import * as productRepository from '../../repositories/product-repository';
import { AddToCartForm } from './AddToCartForm';

export async function ProductList() {
  const products = await productRepository.getProducts();

  return (
    <ul className="flex flex-row gap-4">
      {products.map((product) => (
        <li key={product.id} className="border p-6">
          <h2>{product.name}</h2>
          <p>
            <strong>€ {product.price}</strong>
          </p>

          <AddToCartForm product={product} />
        </li>
      ))}
    </ul>
  );
}
