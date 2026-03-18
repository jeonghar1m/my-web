import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 하드코딩 fallback 없음 — 미설정 시 fail-closed
const ALLOWED_ORIGIN = process.env.APP_BASE_URL ?? null;

export function proxy(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Origin 헤더 없음 = 브라우저 동일출처 요청 또는 서버사이드 클라이언트
  if (!origin) {
    return NextResponse.next();
  }

  // APP_BASE_URL 미설정이거나 origin이 다를 경우 차단 (fail-closed)
  // 주의: 서버사이드 HTTP 클라이언트(curl 등)는 Origin 헤더를 위조할 수 있음
  // 이 체크는 브라우저 기반 cross-origin 요청에만 실질적인 보호를 제공함
  if (!ALLOWED_ORIGIN || origin !== ALLOWED_ORIGIN) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Vary", "Origin");

  return response;
}

export const config = {
  matcher: "/api/portfolio/:path*",
};
