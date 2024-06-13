import Post from "@/app/components/Post";
import prisma from "@/app/lib/prisma";

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

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>FEED</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author?.name}
            authorEmail={post.author?.email}
          />
        );
      })}
    </main>
  );
}
