const myRemoveWithoutCopy = require('./exercise3')

it('Testa myRemoveWithoutCopy', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})