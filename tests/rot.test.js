import { rot } from '../src/ciphers/rot';

describe('test rot cipher implementation', () => {
  test('encoded text should equal expected', () => {
    const input = 'lorem ipsum';
    const expected = 'yberz vcfhz';
    const encoded = rot(input, 13);
    expect(encoded).toBe(expected);
  });

  test('decoded text should equal expected', () => {
    const input = 'qbybe fvg nzrg';
    const expected = 'dolor sit amet';
    const decoded = rot(input, 13);
    expect(decoded).toBe(expected);
  });

  test('decode after encode should equal original text', () => {
    const original = 'to the moon and back';
    const encoded = rot(original, 13);
    const decoded = rot(encoded, 13);
    expect(original).toBe(decoded);
  });

  test('encoded text for N=0 should equal original text', () => {
    const original = 'to the moon and back';
    const encoded = rot(original, 0);
    expect(encoded).toBe(original);
  });
});
