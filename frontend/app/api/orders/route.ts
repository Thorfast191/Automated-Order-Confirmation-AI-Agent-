import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  console.log("POST /api/orders hit");

  const body = await req.json();

  const order = await prisma.order.create({
    data: {
      customerName: body.customerName,
      phone: body.phone,
      product: body.product,
      amount: Number(body.amount),
    },
  });

  console.log("Order created:", order.id);

  try {
    console.log("Calling FastAPI...");

    const response = await fetch("http://127.0.0.1:8000/call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: order.id,
        customerName: order.customerName,
        phone: order.phone,
      }),
    });

    console.log("Status:", response.status);

    const result = await response.json();

    console.log("FastAPI response:", result);
  } catch (error) {
    console.error("Failed to trigger call:", error);
  }

  return NextResponse.json(order);
}
