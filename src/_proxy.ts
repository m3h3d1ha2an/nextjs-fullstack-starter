import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

const authRoutes = ['/login', '/register', '/verify', '/forgot', '/reset'];

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const isRootRoute = pathname === "/";
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  const sessionCookie = await getSessionCookie(request);

  if (!sessionCookie && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (sessionCookie) {
    if (isRootRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
