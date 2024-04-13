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
      href={`./blog/${post.id}`}
      className={`overflow-hidden	border-2 rounded shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] p-4 ${className}`}
    >
      <h3 className='text-3xl font-semibold mb-4'>{post.title}</h3>
      <Image
        src={post.imgURL || '/no-image.png'}
        alt={post.title}
        width={400}
        height={200}
        objectFit='cover'
        className='rounded pb-4'
      />
      <p className='text-xl h-60 max-h-full hover:max-h-screen'>
        {post.content}
      </p>
    </Link>
  );
}

export default PostCard;