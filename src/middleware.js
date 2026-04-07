// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const redirects = [
//     {
//       source: '/fullstack/pune/dsa-course-training-pune',
//       destination: '/fullstack/dsa-course-training-pune',
//       statusCode: 301,
//     },
//     {
//       source: '/fullstack/bangalore/dsa-course-training-bangalore',
//       destination: '/fullstack/dsa-course-training-bangalore',
//       statusCode: 301,
//     },
//     {
//       source: '/datascience/generative-ai-course-for-manager',
//       destination:
//         '/artificial-intelligence/generative-ai-course-for-data-science-professionals',
//       statusCode: 301,
//     },
//     {
//       source:
//         '/cyber-security/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee',
//       destination:
//         '/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee',
//       statusCode: 301,
//     },
//     {
//       source: '/fullstack/generative-ai-course-for-professional',
//       destination:
//         '/artificial-intelligence/generative-ai-course-for-fullstack-professionals',
//       statusCode: 301,
//     },
//     {
//       source: '/cloud&devops/pune/online-cloud-computing-course-pune',
//       destination: '/cloud&devops/online-cloud-computing-course-pune',
//       statusCode: 301, // Force 301 Redirect
//     },
//     {
//       source: '/cloud&devops/bangalore/online-devops-training-in-bangalore',
//       destination: '/cloud&devops/online-devops-training-in-bangalore',
//       statusCode: 301, // Force 301 Redirect
//     },
//     {
//       source: '/cloud&devops/bangalore/online-cloud-computing-course-bangalore',
//       destination: '/cloud&devops/online-cloud-computing-course-bangalore',
//       statusCode: 301, // Force 301 Redirect
//     },
//   ];

//   const redirect = redirects.find((r) => r.source === req.nextUrl.pathname);
//   if (redirect) {
//     return NextResponse.redirect(new URL(redirect.destination, req.url), 301);
//   }

//   return NextResponse.next();
// }

import { NextResponse } from 'next/server';

export function middleware(req) {
  let pathname = req.nextUrl.pathname;

  // ✅ Normalize trailing slash
  if (!pathname.endsWith('/')) {
    pathname = pathname + '/';
  }

  // ✅ 410 GONE routes
  const goneRoutes = [
    '/data-science-course/apply-scholarship-eligibility-test/',
    '/data-science-course/exwatch-2-2/',
  ];

  if (goneRoutes.includes(pathname)) {
    return new NextResponse('<h1>This page has been removed</h1>', {
      status: 410,
      headers: {
        'content-type': 'text/html',
        'X-Robots-Tag': 'noindex, nofollow', // ✅ VERY IMPORTANT
      },
    });
  }

  // ✅ Redirects
  const redirects = [
    {
      source: '/fullstack/pune/dsa-course-training-pune/',
      destination: '/fullstack/dsa-course-training-pune',
    },
    {
      source: '/fullstack/bangalore/dsa-course-training-bangalore/',
      destination: '/fullstack/dsa-course-training-bangalore',
    },
    {
      source: '/datascience/generative-ai-course-for-manager/',
      destination:
        '/artificial-intelligence/generative-ai-course-for-data-science-professionals',
    },
    {
      source:
        '/cyber-security/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee/',
      destination:
        '/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee',
    },
    {
      source: '/fullstack/generative-ai-course-for-professional/',
      destination:
        '/artificial-intelligence/generative-ai-course-for-fullstack-professionals',
    },
    {
      source: '/cloud&devops/pune/online-cloud-computing-course-pune/',
      destination: '/cloud&devops/online-cloud-computing-course-pune',
    },
    {
      source: '/cloud&devops/bangalore/online-devops-training-in-bangalore/',
      destination: '/cloud&devops/online-devops-training-in-bangalore',
    },
    {
      source:
        '/cloud&devops/bangalore/online-cloud-computing-course-bangalore/',
      destination: '/cloud&devops/online-cloud-computing-course-bangalore',
    },
  ];

  const redirect = redirects.find((r) => r.source === pathname);

  if (redirect) {
    const res = NextResponse.redirect(
      new URL(redirect.destination, req.url),
      301
    );

    // ✅ Also prevent indexing of redirected URLs
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');

    return res;
  }

  // ✅ Default response (apply noindex globally if this is staging/private)
  const res = NextResponse.next();

  res.headers.set('X-Robots-Tag', 'noindex, nofollow');

  return res;
}

// ✅ Run on all routes
export const config = {
  matcher: '/:path*',
};
