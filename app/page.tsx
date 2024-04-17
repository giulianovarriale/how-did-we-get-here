import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-3 text-xl">Server action examples</h1>

      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <Link href="/my-tweets" className="text-sky-700 underline">
              My tweets example
            </Link>
          </li>

          <li>
            <Link href="/products" className="text-sky-700 underline">
              Webshop example
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
