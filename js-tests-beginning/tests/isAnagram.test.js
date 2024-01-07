import { isAnagram } from "../src/isAnagram.js";
import { strict as assert} from 'node:assert';

assert.equal(isAnagram('racer', 'carer'), true);
assert.equal(isAnagram('', 'crazy'), false);
assert.equal(isAnagram('crazy', ''), false);

console.log('Tests have been passed!');
