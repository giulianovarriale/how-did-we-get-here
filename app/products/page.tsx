import Link from 'next/link';
import { ProductList } from './components/ProductList';
import { CartCounter } from './components/CartCounter';

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <header className="bg-slate-200 p-6 flex items-center justify-between">
        <h1>Webshop example</h1>

        <CartCounter />
      </header>

      <div className="p-6 flex flex-col gap-8">
        <ProductList />

        <Link href="/" className="text-sky-700 underline">
          Go home
        </Link>
      </div>
    </div>
  );
}
