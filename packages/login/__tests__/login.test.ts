import { login } from '../lib/login.js';
import assert from 'assert';

assert.strict.strictEqual(login(), 'Hello from login');
console.info('login tests passed');
