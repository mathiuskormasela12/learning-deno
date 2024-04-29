
/**
 * This is a built-in API in Deno to create HTTP server.
 * 
 * to run this file we can type on terminal this code:
 * deno run --allow-net ./src/1-create-simple-web-server/server.ts
 * 
 * Notes:
 * Deno is a secure by default, so we need to pass --allow-net
 * flag to give your code network access.  By default the server
 * will be listened on port 8000
 */
Deno.serve((_request: Request) => {
    return new Response("Hello Deno!");
});