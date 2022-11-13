import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });

  // if (!session) {

  // return NextResponse.redirect(new URL("/signin", request.url));
  // }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/signin")) {
    if (session) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}

// export const config = {
//   matcher: "/dashboard/:path*",
// };
