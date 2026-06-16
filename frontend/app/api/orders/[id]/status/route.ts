import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  const order = await prisma.order.update({
    where: {
      id: Number(id),
    },
    data: {
      status: body.status,
      callStatus: body.callStatus,
    },
  });

  return NextResponse.json(order);
}
