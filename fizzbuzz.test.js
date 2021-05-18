const fizzbuzz = require("./fizzbuzz")

describe('fizzbuzz', () => {
/* npm test se ejecuta correctamente
    test("test", () => {
    expect(true).toBe(true);
  });    */

  test('should print 1 if receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);

        expect(expected).toBe(result);
  });

  test('should print fizz if receive 3', () => {
      const expected = "fizz";
      const result = fizzbuzz(3);
      expect(expected).toBe(result);
  });

  test('should print fizz if receive a multiple of 3', () => {
      const expected = "fizz";
      const result = fizzbuzz(6);
      expect(expected).toBe(result);
  });

  test('should print fizz if receive 5', () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
});

  test('should print buzz if receive a multiple of 5', () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
});

    test('should print fizzbuzz if receive a multiple of 3 and 5', () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
    });

});