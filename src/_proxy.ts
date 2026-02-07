import { type NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  return NextResponse.next();
};
