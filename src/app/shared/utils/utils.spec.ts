import { pluck, range } from "./utils";

describe("utils", () => {
  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      expect(range(1,5)).toEqual([1,2,3,4])
    })
    it('returns correct range from 120 to 125', () => {
      expect(range(120,125)).toEqual([120,121,122,123,124])
    })
  })

  describe('pluck', () => {
    it('returns correct result', () => {
      const data = [
        {id: 1, name: 'foo'},
        {id: 2, name: 'bar'},
        {id: 3, name: 'baz'},
      ]
      expect(pluck(data, 'id')).toEqual([1,2,3])
    })
  })
})