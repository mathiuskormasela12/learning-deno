/**
 * A. deno.json or deno.jsonc
 *    deno.json or deno.jsc is a special file
 *    in Deno similar with package.json in Node Js.
 *    This file can be filled with scripts or
 *    key aliases for each standard library
 *    or third-party library.
 */
import {assertEquals} from "unit-test/assert/mod.ts";

import IPerson, {sayHello} from "./say-hello.ts";

Deno.test("Should return Hello Jang Wonyoung", () => {
  const gaeul: IPerson = {
    name: 'Jang Wonyoung'
  };

  assertEquals("Hello Jang Wonyoung", sayHello(gaeul.name));
});