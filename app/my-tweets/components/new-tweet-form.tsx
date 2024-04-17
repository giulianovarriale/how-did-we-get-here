import { addTweet } from '@/app/actions/tweet-actions';

export function NewTweetForm() {
  return (
    <form className="bg-slate-100 p-6" action={addTweet}>
      <label className="block mb-2" htmlFor="tweet-content">
        What is happening?
      </label>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-grow"
          name="tweet-content"
          id="tweet-content"
          defaultValue=""
        />

        <button
          className="bg-sky-700 text-white px-6 py-2 flex-grow-0"
          type="submit"
        >
          Tweet
        </button>
      </div>
    </form>
  );
}
