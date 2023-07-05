const allowedip = process.env.TAB_IP;

export function middleware(request) {
  if (request.nextUrl.pathname == "/") {
    const sourceIpAddress = request.headers.get("x-forwarded-host");
    const forip = request.headers.get("x-forwarded-for");
    if (!allowedip.includes(sourceIpAddress)) {
      console.log(sourceIpAddress);
      console.log(forip);
      return new Response("Forbidden", { status: 403 });
    }
  }
}
