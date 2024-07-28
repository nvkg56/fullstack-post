import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  const post = await request.json();
  console.log(post);
  const { title, content } = post;
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Nhan Nguyen",
        },
      },
    },
  });
  console.log(result);
  return NextResponse.json({ result });
}
