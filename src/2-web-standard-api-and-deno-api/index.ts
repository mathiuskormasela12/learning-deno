/**
 * A. Web Standard API
 *    Deno provides a lot API that exists on Web Standard API
 *    like fetch API, Console, WebSocket, setTimeOut, setInterval and others web standard API.
 *    Those APIs already there in the global scope.
 * 
 * B. Non Web Standard API
 *    Besides Web standard API, Deno provides you non standard
 *    Web API, like API to create a web server or API to access
 *    file system or API to access environtment variables.
 *    Those API can be accessed from Deno namespace.
 */

// Use Fetch API
/**
 * Because fetch API will access network
 * you need to give your code network permission
 * by adding --alow-net flag to give network permission
 * or you can add -A flag to give all permision
 */
const site = await fetch("https://www.deno.com");
console.info(await site.text());

// Use Web Standard API setInterval
let seconds: number = 0 ;
setInterval(() => {
    seconds++;
    console.log(seconds)
}, 1000);

// Use Non Web Standard API Deno.serve to create a web server (will start a web server on port 8000 by default)
Deno.serve((_request) => {
  return new Response("Hello Deno Non Web Standard API");
});