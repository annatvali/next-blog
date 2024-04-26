import React from 'react';
import { prisma } from '../../../lib/prisma';
import Image from 'next/image';
import { splitContentIntoChunks } from '@/utils/uploadthings';

const page = async ({ params } : {
  params: {
    id: number,
  }
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  });

  let date = new Date();
  const contentChunks = splitContentIntoChunks(post?.content);
  return (
    <div className='container-2xl my-20'>
      {post && (
        <>
          <div className=' mb-8'>
            <h1 className='text-4xl font-bold text-gray-700 sm:mb-5'>{post.title}</h1>
            <div className='flex items-center gap-2'>
              <div
                className='flex items-center justify-center bg-gray-200 w-10 h-10 rounded-full opacity-70 bg-no-repeat bg-center bg-contain'
                style={{
                  backgroundImage: `url(${
                    post.author?.image
                      ? post.author.image
                      : '/default-user-img.png'
                  })`,
                }}
              />
              <p>{post.author.name}</p>
              <time dateTime={new Date(date).toISOString()} className='italic'>
                {new Date(date).toLocaleTimeString()}
              </time>
            </div>
          </div>
          {post.imgURL ? (
            <Image
              src={post.imgURL}
              alt='thumbnail'
              width={300}
              height={200}
              className='w-full h-full rounded mb-6 object-cover'
            />
          ) : (
            <Image
              src='/article-placeholder.png'
              alt='thumbnail'
              width={300}
              height={200}
              className='w-full h-full rounded mb-6 object-cover'
            />
          )}
          {contentChunks.map((chunk, index) => (
            <React.Fragment key={index}>
              <p className='text-2xl sm:text-xl'>{chunk.join('. ') + '.'}</p>
              {index < 3 && <div className='h-4'></div>}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
}

export default page;