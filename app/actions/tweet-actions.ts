'use server';

import { revalidatePath } from 'next/cache';
import * as tweetRepository from '../repositories/tweet-repository';

export async function addTweet(formData: FormData) {
  const partialTweet = {
    content: formData.get('tweet-content') as string,
    author: 'Anonymous', // Hard coded for now
  };

  tweetRepository.addTweet(partialTweet);

  revalidatePath('/my-tweets');
}
