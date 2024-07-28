"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
  };
  return (
    <div>
      <Link href={"/"}>
        <h1> VIEW FEED</h1>
      </Link>

      <form
        className="flex flex-col justify-around gap-5 m-10 "
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Title: </label>
          <input
            className="text-black"
            type="text"
            id="title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">
            Content:
            <textarea
              className="text-black"
              id="content"
              value={content}
              onChange={(e: any) => setContent(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
