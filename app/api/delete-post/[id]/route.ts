import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(request: Request, { params }: any) {
  const id = params.id;
  console.log(id);

  const delpost = await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json(delpost);
}
