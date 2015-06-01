require('lazy-ass');
require('./index');

describe('freeze-prototypes', function () {
  it('stops adding new properties', function () {
    Array.prototype.foo = 'foo';
    la(typeof Array.prototype.foo === 'undefined');
  });

  it('stops modifying properties', function () {
    var concat = Array.prototype.concat;
    Array.prototype.concat = function fakeConcat() {
      throw new Error('hi from concat');
    };
    la(Array.prototype.concat === concat, 'still old concat');
    var result = [].concat(['foo']);
    la(result.length === 1 &&
      result[0] === 'foo', 'used concat');
  });
});
