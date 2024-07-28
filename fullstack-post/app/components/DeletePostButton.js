"use client";

import { useRouter } from "next/navigation";

export default function DeletePostButton({ postid }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/delete-post/${postid}`, {
        method: "DELETE",
      });
      router.refresh();
      // router.push("/");
    } catch (e) {
      console.error(e);
    }
  }
  console.log(`Success Deleted Postid: ${postid}`);
  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
