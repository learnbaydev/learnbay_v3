import { NextResponse } from "next/server";

export function middleware(req) {
  const redirects = [
    {
      source: "/fullstack/pune/dsa-course-training-pune",
      destination: "/fullstack/dsa-course-training-pune",
      statusCode: 301, // Force 301 Redirect
    },
    {
      source: "/cloud&devops/pune/online-cloud-computing-course-pune",
      destination: "/cloud&devops/online-cloud-computing-course-pune",
      statusCode: 301, // Force 301 Redirect
    },
    {
      source: "/cloud&devops/bangalore/online-devops-training-in-bangalore",
      destination: "/cloud&devops/online-devops-training-in-bangalore",
      statusCode: 301, // Force 301 Redirect
    },
    {
      source: "/cloud&devops/bangalore/online-cloud-computing-course-bangalore",
      destination: "/cloud&devops/online-cloud-computing-course-bangalore",
      statusCode: 301, // Force 301 Redirect
    },
  ];

  const redirect = redirects.find((r) => r.source === req.nextUrl.pathname);
  if (redirect) {
    return NextResponse.redirect(new URL(redirect.destination, req.url), 301);
  }

  return NextResponse.next();
}
