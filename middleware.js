const allowedip = [process.env.TAB_IP];

export function middleware(request) {
  if (request.nextUrl.pathname == "/") {
    const sourceIpAddress = request.headers.get("x-forwarded-host");
    if (!allowedip.includes(sourceIpAddress)) {
      return new Response("Forbidden", { status: 403 });
    }
  }
}
