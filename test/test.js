const assert = require('assert');

describe('Array', function () {

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('My test', function () {
    it('my test', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        this.timeout(1000);
        assert.ok(true);
    });
});

describe('hooks', function () {
    before(function () {
      // runs once before the first test in this block
      console.log('before');
    });
  
    after(function () {
      // runs once after the last test in this block
      console.log('after');
    });
  
    beforeEach(function () {
      // runs before each test in this block
      console.log('beforeEach');
    });
  
    afterEach(function () {
      // runs after each test in this block
      console.log('afterEach');
    });
  
    // test cases
    it('test 1', () => {
        assert.ok(true);
    });
    it('test 2', () => {
        assert.ok(true);
    });
    it('test 3', () => {
        assert.ok(true);
    });
  });

function add(args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

describe('add()', function () {
  const tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 2, 3], expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(({args, expected}) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});
