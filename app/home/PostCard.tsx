import type { Post } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post,
  className?: string,
};

const PostCard = ({ post, className }: Props) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className='overflow-hidden block cursor-pointer bg-gray-100 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100'
    >
      <article className='w-full h-54 grid grid-col-3 xl:grid-col-2 sm:grid-col-1'>
        <figure className='w-full h-30 lg:h-72 '>
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
        <h1 className='text-xl mb-4'>{post.title}</h1>
        <p className='text-xs mb-4 line-clamp-4'>{post.content}</p>
        <p className='text-indigo-600'>Read More</p>
      </div>
    </Link>
  );
}

export default PostCard;