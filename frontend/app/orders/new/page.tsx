"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewOrderPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    product: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: form.customerName,
        phone: form.phone,
        product: form.product,
        amount: Number(form.amount),
      }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/orders");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={(e) =>
            setForm({
              ...form,
              customerName: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="Product"
          value={form.product}
          onChange={(e) =>
            setForm({
              ...form,
              product: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({
              ...form,
              amount: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-3 rounded"
        >
          {loading ? "Creating..." : "Create Order"}
        </button>
      </form>
    </div>
  );
}
