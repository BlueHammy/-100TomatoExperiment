"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("cancelled") === "true";
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
    <main>
      {cancelled && (
        <div className="cancelled-note">
          Checkout cancelled. The tomato remains unpurchased.
        </div>
      )}

      <h1>Buy a tomato for £100</h1>
      <p className="lead">Yes. A tomato.</p>

      <div className="disclaimer">
        <p>«Not a tomato plant.</p>
        <p>Not 100 tomatoes.</p>
        <p>Not a tomato subscription.</p>
        <p>One tomato. £100.»</p>
      </div>

      <button
        className="buy-button"
        onClick={handleBuy}
        disabled={loading}
        type="button"
      >
        {loading ? "One moment…" : "Buy the tomato — £100"}
      </button>

      <p className="warning">«You have been warned.»</p>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
