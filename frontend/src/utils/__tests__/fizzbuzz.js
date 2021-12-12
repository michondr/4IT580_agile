export function fizzBuzz (x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return 'FizzBuzz';
  }
  if (x % 3 === 0) {
    return 'Fizz';
  }
  if (x % 5 === 0) {
    return 'Buzz';
  }

  return x;
}


describe('fizzBuzz', () => {
  describe('1. if the number is divisible by 3 it returns "Fizz"', () => {
    it('returns "Fizz" for positive 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('returns "Fizz" for negative -6', () => {
      expect(fizzBuzz(-6)).toBe('Fizz');
    });
    it('returns "Fizz" for large number 30000000', () => {
      expect(fizzBuzz(30000003)).toBe('Fizz');
    });
  });

  describe('2. if the number is divisible by 5 it returns "Buzz"', () => {
    it('returns "Buzz" for positive 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('returns "Buzz" for negative -10', () => {
      expect(fizzBuzz(-10)).toBe('Buzz');
    });
    it('returns "Buzz" for large negative number -2000005', () => {
      expect(fizzBuzz(-2000005)).toBe('Buzz');
    });
  });

  describe('3. if the number is divisible by 5 and 3 it returns "FizzBuzz"', () => {
    it('returns "FizzBuzz" for 15', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('returns "FizzBuzz" for 30', () => {
      expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
    it('returns "FizzBuzz" for 0', () => {
      expect(fizzBuzz(0)).toBe('FizzBuzz');
    });
  });

  describe('4. if the number is not divisible by 5 or 3 it returns input number', () => {
    it('returns number for 1', () => {
      expect(fizzBuzz(1)).toBe(1);
    });
    it('returns number for 13', () => {
      expect(fizzBuzz(13)).toBe(13);
    });
  });

});
