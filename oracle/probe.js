const VOWEL_SOUND_REGEXP = /^([aeiou]|xr|yt)/;
const CONSONANT_SOUND_REGEXP =
  /^([^aeiou]+(?=y)|[^aeiou]?qu|[^aeiou]+)([a-z]+)/;

function translateWord(word) {
  if (VOWEL_SOUND_REGEXP.test(word)) {
    return `${word}ay`;
  }

  const newWord = word.replace(CONSONANT_SOUND_REGEXP, '$2$1');
  return `${newWord}ay`;
}

const translate = (english) => {
  return english.split(' ').map(translateWord).join(' ');
};

const __in = ["apple", "ear", "igloo", "under", "equal", "koala", "xenon", "liquid", "chair", "queen", "therapy", "thrush", "yttria", "xray", "rhythm", "my"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: translate(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
