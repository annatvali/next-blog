import type { Post } from "@prisma/client";
import Link from "next/link";

type Props = {
  post: Post,
  className?: string,
};

const PostCard = ({ post, className }: Props) => {
  return (
    <Link href={`./blog/${post.id}`} className={`border-2 rounded shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] p-4 ${className}`}>
      <h3 className='text-3xl font-semibold mb-4'>{post.title}</h3>
      <p className="text-xl">{post.content}</p>
    </Link>
  );
}

export default PostCard;