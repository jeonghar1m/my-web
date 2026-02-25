import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_ORIGIN = process.env.APP_BASE_URL || "http://localhost:3000";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Origin 헤더가 존재하면서 허용된 origin과 다를 경우 차단
  if (origin && origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const response = NextResponse.next();

  // 같은 origin 요청에만 CORS 헤더 설정 (브라우저에게 other origin 차단 명시)
  response.headers.set(
    "Access-Control-Allow-Origin",
    origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : "null",
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Vary", "Origin");

  return response;
}

export const config = {
  matcher: "/api/portfolio/:path*",
};
