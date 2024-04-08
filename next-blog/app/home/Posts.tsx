import { PrismaClient } from "@prisma/client";
import PostCard from "./PostCard";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
  const posts = await prisma.post.findMany();

  const bgClasses = ["bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-indigo-400", "bg-purple-400", "bg-pink-400"];

  return (
    <section className="my-40">
      <h2 className="text-6xl font-semibold mb-20">Popular</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </section>
  );
}

export default Posts;