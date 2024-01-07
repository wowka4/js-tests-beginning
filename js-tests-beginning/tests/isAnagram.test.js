import { isAnagram } from "../src/isAnagram.js";
import { strict as assert} from 'node:assert';

assert(isAnagram('racer', 'carer') === true);
assert(isAnagram('', 'crazy') === false);
assert(isAnagram('crazy', '') === false);

console.log('Tests have been passed!');
