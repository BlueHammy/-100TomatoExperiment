"use client";

import { useState } from "react";

export function HomeBuyButton() {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error ?? "Something went wrong.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <button
      className="buy-button"
      onClick={handleBuy}
      disabled={loading}
      type="button"
    >
      {loading ? "One moment…" : "Buy the tomato"}
    </button>
  );
}
