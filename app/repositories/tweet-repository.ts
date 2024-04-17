import { cookies } from 'next/headers';

type Tweet = {
  id: number;
  content: string;
  author: string;
};

export async function getTweets(): Promise<Tweet[]> {
  const cookiesStore = cookies();
  const tweets = cookiesStore.get('tweets')?.value;

  if (!tweets) {
    return [];
  }

  return JSON.parse(tweets);
}

export async function addTweet(tweet: Omit<Tweet, 'id'>) {
  const cookiesStore = cookies();

  const tweets = await getTweets();
  const id = tweets.length === 0 ? 1 : tweets.length + 1;

  const newTweet = {
    id,
    content: tweet.content,
    author: tweet.author,
  };

  cookiesStore.set('tweets', JSON.stringify(tweets.concat(newTweet)));
}
