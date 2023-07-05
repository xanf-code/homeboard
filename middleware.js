const allowedip = process.env.TAB_IP;

export function middleware(request) {
  if (request.nextUrl.pathname == "/") {
    const forip = request.headers.get("x-forwarded-for");
    if (!allowedip.includes(forip)) {
      console.log(forip);
      return new Response("Forbidden", { status: 403 });
    }
  }
}
