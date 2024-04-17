import { getTweets } from '../../repositories/tweet-repository';

export async function TweetList() {
  const tweets = await getTweets();

  if (tweets.length === 0) {
    return <p>No tweets yet!</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="bg-slate-100 p-6">
          <p>{tweet.content}</p>
          <span className="font-bold text-sm">{tweet.author}</span>
        </li>
      ))}
    </ul>
  );
}
