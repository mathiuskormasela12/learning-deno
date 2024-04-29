/**
 * To use Deno Standard Library or Third-Party Library you
 * should import them using url.
 */
// import Deno Standard Library to do unit test
import {assertEquals} from "https://deno.land/std@0.223.0/assert/mod.ts";

// To import module in Deno using Esmodule
// noted: when you import a file, you have to pass its extentions
import IPerson, {sayHello} from "./say-hello.ts";

// To do unit test
// To run unit test file you can type deno test ./src/3-module-standard-library-test/index.ts
Deno.test("Should return Hello Kim Gaeul", () => {
  const gaeul: IPerson = {
    name: 'Kim Gaeul'
  };

  assertEquals("Hello Kim Gaeul", sayHello(gaeul.name));
});