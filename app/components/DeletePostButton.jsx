"use client";

import { DELETE } from "@/app/api/delete-post/[id]/route";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ postid }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/delete-post/${postid}`, {
        method: "DELETE",
      });
      router.refresh();
      console.log(`Success Deleted Postid: ${postid}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
}
