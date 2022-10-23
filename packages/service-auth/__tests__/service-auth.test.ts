import { serviceAuth } from "../lib/service-auth";
import assert from 'assert'

assert.strict.strictEqual(serviceAuth(), 'Hello from serviceAuth');
console.info("serviceAuth tests passed");
