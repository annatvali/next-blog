import { useState } from 'react';
import { Prisma } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import BtnLoadMore from './BtnLoadMore'

type Post = Prisma.PostGetPayload<{
  include: { categories: true };
}>;

export type PostListProps = {
  posts: Post[];
  newBlog: Post | null;
};

export const PostsList = (props: PostListProps) => {
  const [numPostsToShow, setNumPostsToShow] = useState(6);

  const handleLoadMore = () => {
    setNumPostsToShow((prevNumPostsToShow) => prevNumPostsToShow + 6);
  };

  return (
    <>
      <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-4'>
        {props.posts.slice(0, numPostsToShow).map((post: Post) => (
          <div key={post.id} className='w-full h-full bg-white'>
            <Link
              href={`/blog/${post.id}`}
              className='block cursor-pointer bg-gray-100 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100'
            >
              <article className='w-full h-full'>
                <figure className='w-full h-30 lg:h-72'>
                  {post.imgURL ? (
                    <Image
                      src={post.imgURL}
                      alt='thumbnail'
                      width={300}
                      height={200}
                      className='w-full h-full rounded object-cover'
                    />
                  ) : (
                    <Image
                      src='/article-placeholder.png'
                      alt='thumbnail'
                      width={300}
                      height={200}
                      className='w-full h-full rounded object-cover'
                    />
                  )}
                </figure>
              </article>
              <div className='px-6 py-5 text-left h-full'>
                <p className='text-base mb-4'>
                  {post.createdAt?.toLocaleString()}
                </p>
                <h1 className='text-xl mb-4'>{post.title}</h1>
                <p className='text-xs mb-4 line-clamp-4'>{post.content}</p>
                <p className='text-indigo-600'>Read More</p>
              </div>
            </Link>
          </div>
        ))}
        {props.newBlog && (
          <div className='w-full sm:w-40 md:w-60 lg:w-80 h-full bg-white'>
            <Link
              href={`/blog/${props.newBlog.id}`}
              className='block cursor-pointer bg-gray-100 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100'
            >
              <article className='w-full h-full'>
                <figure className='w-full h-30 md:h-40 lg:h-72 '>
                  {props.newBlog.imgURL ? (
                    <Image
                      src={props.newBlog.imgURL}
                      alt='thumbnail'
                      width={300}
                      height={200}
                      className='w-full h-full rounded object-cover'
                    />
                  ) : (
                    <Image
                      src='/article-placeholder.png'
                      alt='thumbnail'
                      width={300}
                      height={200}
                      className='w-full h-full rounded object-cover'
                    />
                  )}
                </figure>
              </article>
              <div className='px-6 py-5 text-left h-full'>
                <p className='text-base mb-4'>
                  {props.newBlog.createdAt?.toLocaleString()}
                </p>
                <h1 className='text-xl mb-4'>{props.newBlog.title}</h1>
                <p className='text-xs mb-4 line-clamp-4'>
                  {props.newBlog.content}
                </p>
                <p className='text-indigo-600'>Read More</p>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className='w-full h-full flex items-center justify-center mt-12'>
        <BtnLoadMore
          handleLoadMore={handleLoadMore}
          showButton={numPostsToShow < props.posts.length}
        />
      </div>
    </>
  );
};
