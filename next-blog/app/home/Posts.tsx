import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
  const users = await prisma.user.findMany();
  console.log(users);

  const posts = await prisma.post.findMany();
  console.log(posts);

  return (
    <>
    <p>Posts</p>
    </>
  );
}

export default Posts;