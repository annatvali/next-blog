"use client";
import { useState } from 'react';
import { useSession} from 'next-auth/react';
import { createPost } from '@/actions/publishPost';

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if(!session && status !== "loading") return (
    <div>
      <p>You need to sign in to add a new blog</p>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = session?.user?.id || 0;

    if (!userId) return;
    try {
      const post = await createPost({ title, content, authorId: userId  });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (submitted) return (
    <>
      <h2 className='text-6xl font-semibold mb-20'>Post Submitted!!</h2>
    </>
  );

  return (
    <div className='flex flex-col'>
      <h2 className='text-6xl font-semibold mb-20'>New Blog</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          className='text-3xl font-semibold border-2 rounded focus-visible:outline-none shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] p-4'
        />
        <textarea
          name='content'
          value={content}
          rows={10}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
          className='text-xl border-2 rounded focus-visible:outline-none shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] p-4'
        ></textarea>
        <button
          type='submit'
          className='w-fit-content text-2xl text-white font-bold rounded p-4 bg-indigo-600'
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default NewBlogForm;