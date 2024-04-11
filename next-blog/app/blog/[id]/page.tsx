import { prisma } from '../../../lib/prisma';

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
  return (
    <div className='container-2xl my-20'>
      {post && (
        <>
          <div className=' mb-8'>
            <h1 className='text-4xl sm:mb-5'>{post.title}</h1>
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
          <p className='text-2xl sm:text-xl'>{post.content}</p>
        </>
      )}
    </div>
  );
}

export default page;