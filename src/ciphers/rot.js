export const ROT_DEFAULT_N = 13;

/**
 * Applies rot algorithm
 *
 * @param {string} input
 * @param {number} n
 * @returns ciphered text
 */
export function rot(input, n) {
  if (input === null || input === undefined) {
    return input;
  }

  if (n === 0) {
    return input;
  }

  const rotations = n || ROT_DEFAULT_N;
  const inputString = String(input);
  const result = inputString.replace(/[a-zA-Z]/g, (c) => {
    const rotatedChar = c.charCodeAt(0) + rotations;
    return String.fromCharCode(
      (c <= 'Z' ? 90 : 122) >= rotatedChar ? rotatedChar : rotatedChar - 26
    );
  });
  return result;
}

export default { rot };
