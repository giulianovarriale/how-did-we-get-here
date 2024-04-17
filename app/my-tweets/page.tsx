import Link from 'next/link';
import { NewTweetForm } from './components/new-tweet-form';
import { TweetList } from './components/tweet-list';

export default function Page() {
  return (
    <div className="gap-8 flex flex-col max-w-xl p-10">
      <Link href="/" className="text-sky-700 underline">
        Go home
      </Link>

      <NewTweetForm />

      <TweetList />
    </div>
  );
}
