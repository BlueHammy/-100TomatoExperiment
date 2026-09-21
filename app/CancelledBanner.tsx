"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CancelledBannerInner() {
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("cancelled") === "true";

  if (!cancelled) return null;

  return (
    <div className="cancelled-note">
      Checkout cancelled. The tomato remains unpurchased.
    </div>
  );
}

export function CancelledBanner() {
  return (
    <Suspense>
      <CancelledBannerInner />
    </Suspense>
  );
}
