const allowedip = process.env.TAB_IP;

export function middleware(request) {
  if (request.nextUrl.pathname == "/") {
    const clientIP = request.headers.get("x-forwarded-for");
    const host = request.headers.get("x-forwarded-host");
    if (!allowedip.includes(clientIP)) {
      const timestamp = new Date().toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      });
      console.log(`${timestamp} - Blocked IP: ${clientIP} and Host: ${host}`);
      return new Response("Forbidden", { status: 403 });
    }
  }
}
