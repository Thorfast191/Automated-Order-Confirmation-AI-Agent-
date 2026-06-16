"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const res = await fetch("/api/orders");
    const data = await res.json();

    setOrders(data);
  }

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Orders Dashboard</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Call Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order: any) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.phone}</td>
              <td>{order.status}</td>
              <td>{order.callStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
