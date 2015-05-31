require('lazy-ass');
require('./index');

describe('freeze-prototypes', function () {
  it('stops adding new properties', function () {
    Array.prototype.foo = 'foo';
    la(typeof Array.prototype.foo === 'undefined');
  });
});
