import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

function getTomatoFilePath(): string | null {
  const jpgPath = path.join(process.cwd(), "private", "tomato.jpg");
  if (fs.existsSync(jpgPath)) return jpgPath;

  const svgPath = path.join(process.cwd(), "public", "tomato.svg");
  if (fs.existsSync(svgPath)) return svgPath;

  return null;
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return new NextResponse(null, { status: 404 });
    }
  } catch {
    return new NextResponse(null, { status: 404 });
  }

  const filePath = getTomatoFilePath();
  if (!filePath) {
    return new NextResponse(null, { status: 404 });
  }

  const body = fs.readFileSync(filePath);
  const contentType = filePath.endsWith(".jpg")
    ? "image/jpeg"
    : "image/svg+xml";

  return new NextResponse(body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "private, no-store",
    },
  });
}
