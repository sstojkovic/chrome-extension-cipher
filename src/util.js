/* eslint-disable import/prefer-default-export */

/**
 * Sets text to clipboard
 *
 * @param {string} data
 */
export function setClipboard(data) {
  const el = document.createElement('textarea');
  el.value = data;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
