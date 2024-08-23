import reverse from '../src/index.js';

const obj = { key: 'valeu' };
const obj1 = { key: 'valeu' };


test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
  });

test('match', () => {
  expect(obj).toMatchObject(obj1);
})