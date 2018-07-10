/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const myMap = new Map(englishToBrailleLiteralSet);

function convertTextToBraille() {
  const inputText = document.getElementById('sourceLangText').value;
  const inputArray = inputText.split('');
  let convertedString = '';
  for (let i = 0; i < inputText.length; i += 1) {
    convertedString += myMap.get(inputArray[i]);
  }
  document.getElementById('targetLangText').innerHTML = convertedString;
  return convertedString;
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertTextToBraille);
