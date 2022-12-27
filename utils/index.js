const wordOptionalParams = (topics, startWith, endWith, max) => {
  max = max ? max : "";
  topics = topics ? topics : "";
  endWith = endWith ? endWith : "";
  startWith = startWith ? startWith : "";
  return `sp=${startWith + "*" + endWith}&max=${max}&topics=${topics}&md=p`;
};
const filterWords = (words, type) => {
  const filteredWords = words.data.filter((word) => {
    const tags = word.tags.filter((tag) => tag === type);
    return tags.length;
  });
  return filteredWords;
};
const arrayOfWordsTransformer = (words) => {
  const arr = [];
  words.map((wordObject) => {
    arr.push(wordObject.word);
  });
  return arr;
};

const decorateWords = (partOfSpeech, transformToArray, words) => {
  if (partOfSpeech) words = partOfSpeech && filterWords(words, partOfSpeech);
  else
    words = words.data.map((word) => {
      return word;
    });
  if (transformToArray) words = arrayOfWordsTransformer(words);
  return words;
};

module.exports = { wordOptionalParams, decorateWords };
