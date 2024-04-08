import { prisma } from '@/lib/prisma';

const page = async ({ params } : {
  params: {
    id: string,
  }
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    }
  });

  return (
    <div className="grid grid-cols-1 justify-center my-20">
      {post && (
        <article className="w-full">
          <h3 className="text-5xl font-semibold text-center mb-12">{post.title}</h3>
          <p className="text-2xl">{post.content}</p>
        </article>
      )}
    </div>
  );
}

export default page;