import {load} from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import winston from "npm:winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({})
  ]
});

const env = await load();
const port: number = Number(env['PORT']);

const handler = (req: Request): Response => {
  logger.info(`HTTP Method : ${req.method}`);
  logger.info(`Full Url from http until the query param : ${req.url}`);
  logger.info(`${req.body}`)

  if(req.method === "POST" && req.url === `http://localhost:${port}/api/v1/auth/register`) {
    return new Response('Hello Register');
  } 
  return new Response('Hello Deno');
}
logger.info(`Magic happens at port ${port}`);
Deno.serve({port}, handler);