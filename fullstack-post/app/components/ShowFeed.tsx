import { prisma } from "@/app/lib/prisma";
import DeletePostButton from "@/app/components/DeletePostButton";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return posts;
}
export default async function ShowFeed() {
  const posts = await getPosts();

  const feed = posts.map((post) => (
    <li key={post.id}>
      <div>
        <p>{post.author?.name}</p>
        <p>{post.author?.email}</p>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <DeletePostButton postid={post.id} />
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="flex flex-col gap-10">{feed}</ul>
    </div>
  );
}
