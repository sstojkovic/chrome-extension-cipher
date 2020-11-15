/* eslint-disable import/extensions */
/* Note: Chrome won't load module if .js extension is not provided in import */

import { rot, ROT_DEFAULT_N } from './ciphers/rot.js';
import { setClipboard } from './util.js';

/**
 * Runs cipher algorithms againts selected text and copies result to the clipboard
 *
 * @param {chrome.contextMenus.OnClickData} info
 */
function onCipherClick(info) {
  const ciphered = rot(info.selectionText, ROT_DEFAULT_N);
  setClipboard(ciphered);
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Cipher "%s"',
    id: 'cipher',
    contexts: ['selection'],
    onclick: onCipherClick,
  });
});
