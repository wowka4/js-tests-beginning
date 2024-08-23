import { isAnagram } from "../src/isAnagram.js";
import { strict as assert } from 'node:assert';

assert.strictEqual(isAnagram('racer', 'carer'), true);
assert.strictEqual(isAnagram('', 'crazy'), false);
assert.strictEqual(isAnagram('crazy', ''), false);

console.log('The tests have been passed!');
