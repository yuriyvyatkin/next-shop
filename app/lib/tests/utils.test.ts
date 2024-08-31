import { formatCurrency, generatePagination } from '../utils';

describe('formatCurrency', () => {
  it('should format 100 correctly as $1.00', () => {
    expect(formatCurrency(100)).toBe('$1.00');
  });

  it('should format 123456 correctly as $1,234.56', () => {
    expect(formatCurrency(123456)).toBe('$1,234.56');
  });
});

describe('generatePagination', () => {
  it('should return correct pagination for 7 or fewer pages', () => {
    expect(generatePagination(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle current page among first 3 pages correctly', () => {
    expect(generatePagination(2, 10)).toEqual([1, 2, 3, '...', 9, 10]);
  });

  it('should handle current page among last 3 pages correctly', () => {
    expect(generatePagination(9, 10)).toEqual([1, 2, '...', 8, 9, 10]);
  });

  it('should handle current page in the middle correctly', () => {
    expect(generatePagination(5, 10)).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});
