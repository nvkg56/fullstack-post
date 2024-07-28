import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(request: NextRequest, { params }: any) {
  const id = params.id;
  const req = request;
  console.log("The request detail:", req);
  console.log("The params is:", params);

  const delpost = await prisma.post.delete({
    where: { id },
  });

  console.log(`The post was deleted :`, delpost);
  return NextResponse.json(delpost);
}
