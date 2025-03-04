import { NextResponse } from "next/server";

export function middleware(req) {
  const redirects = [
    {
      source: "/fullstack/pune/dsa-course-training-pune",
      destination: "/fullstack/dsa-course-training-pune",
      statusCode: 301,
    },
    {
      source: "/fullstack/bangalore/dsa-course-training-bangalore",
      destination: "/fullstack/dsa-course-training-bangalore",
      statusCode: 301,
    },
  ];

  const redirect = redirects.find((r) => r.source === req.nextUrl.pathname);
  if (redirect) {
    return NextResponse.redirect(new URL(redirect.destination, req.url), 301);
  }

  return NextResponse.next();
}
