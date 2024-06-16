import Link from "next/link";
import ShowFeed from "@/app/components/ShowFeed";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={"./add-post"}>
        <h1>POST NEW</h1>
      </Link>
      <div>
        <ShowFeed />
      </div>
    </main>
  );
}
