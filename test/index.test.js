// Unit test the curry method.

const assert = require('assert');
require('../index');

function add(x,y) {
  return x + y;
}

const add1 = add.curry(1);
assert(add1(2) === 3, "Expect currying to work.");

const add7 = add.curry(7);
assert(add7(10) === 17, "Expect currying to work.")
