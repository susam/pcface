const assert = require('assert');
const pcface = require('../pcface.js')

describe('range', function () {
  it('empty range', function () {
    assert.deepStrictEqual(pcface.range(0, 0), [])
    assert.deepStrictEqual(pcface.range(1, 0), [])
    assert.deepStrictEqual(pcface.range(5, 0), [])
  })

  it('nonempty range', function () {
    assert.deepStrictEqual(pcface.range(0, 1), [0])
    assert.deepStrictEqual(pcface.range(0, 2), [0, 1])
    assert.deepStrictEqual(pcface.range(0, 5), [0, 1, 2, 3, 4])
    assert.deepStrictEqual(pcface.range(65, 70), [65, 66, 67, 68, 69])
  })

  it('empty ranges', function () {
    assert.deepStrictEqual(pcface.range(0, 0, 5), [])
    assert.deepStrictEqual(pcface.range(1, 0, 5), [])
    assert.deepStrictEqual(pcface.range(5, 0, 1), [])
  })

  it('nonempty ranges', function () {
    assert.deepStrictEqual(pcface.ranges(0, 1, 5), [[0]])
    assert.deepStrictEqual(pcface.ranges(0, 5, 1), [[0], [1], [2], [3], [4]])
    assert.deepStrictEqual(pcface.ranges(0, 2, 5), [[0, 1]])
    assert.deepStrictEqual(pcface.ranges(0, 4, 5), [[0, 1, 2, 3]])
    assert.deepStrictEqual(pcface.ranges(0, 5, 5), [[0, 1, 2, 3, 4]])
    assert.deepStrictEqual(pcface.ranges(0, 6, 5), [[0, 1, 2, 3, 4], [5]])
    assert.deepStrictEqual(pcface.ranges(65, 78, 5), [[65, 66, 67, 68, 69],
                                                      [70, 71, 72, 73, 74],
                                                      [75, 76, 77]])
  })
})
