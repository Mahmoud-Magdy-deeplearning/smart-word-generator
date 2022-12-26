const axios = require("axios");
const { wordOptionalParams, decorateWords } = require("./utils");

/**
 * Generate words that have similar meaning of input word
 * @param  {String} word The input word
 * @param  {Boolean} transformToArray Specify if true then return type array of words otherwise array of objects include extra details
 * @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
 * @param  {String} topics  Optional param to specify which category of the returned words belong to
 * @param  {String} startWith  Optional param to specify what returned words should start with
 * @param  {String} endWith  Optional param to specify what returned words should end with
 * @param  {String} max Optional param to specify number of returned words
 */
const generateWordMeansLike = async (
  word,
  transformToArray = false,
  partOfSpeech,
  topics,
  startWith,
  endWith,
  max
) => {
  try {
    const optionalParams = wordOptionalParams(topics, startWith, endWith, max);
    let response = await axios.get(
      `https://api.datamuse.com/words?ml=${word}&${optionalParams}`
    );
    return decorateWords(partOfSpeech, transformToArray, response);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Generate words that sounds like input word
 * @param  {String} word The input word
 * @param  {Boolean} transformToArray Specify if true then return type array of words otherwise array of objects include extra details
 * @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
 * @param  {String} topics  Optional param to specify which category of the returned words belong to
 * @param  {String} startWith  Optional param to specify what returned words should start with
 * @param  {String} endWith  Optional param to specify what returned words should end with
 * @param  {String} max Optional param to specify number of returned words
 */
const generateWordSoundsLike = async (
  word,
  transformToArray = false,
  partOfSpeech,
  topics,
  startWith,
  endWith,
  max
) => {
  try {
    const optionalParams = wordOptionalParams(topics, startWith, endWith, max);
    let response = await axios.get(
      `https://api.datamuse.com/words?sl=${word}&${optionalParams}`
    );
    return decorateWords(partOfSpeech, transformToArray, response);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Generate words that spelled like input word
 * @param  {String} word The input word
 * @param  {Boolean} transformToArray Specify if true then return type array of words otherwise array of objects include extra details
 * @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
 * @param  {String} topics  Optional param to specify which category of the returned words belong to
 * @param  {String} startWith  Optional param to specify what returned words should start with
 * @param  {String} endWith  Optional param to specify what returned words should end with
 * @param  {String} max Optional param to specify number of returned words
 */
const generateWordSpelledLike = async (
  word,
  transformToArray = false,
  partOfSpeech,
  topics,
  startWith,
  endWith,
  max
) => {
  try {
    const optionalParams = wordOptionalParams(topics, startWith, endWith, max);
    let response = await axios.get(
      `https://api.datamuse.com/words?sp=${word}&${optionalParams}`
    );
    return decorateWords(partOfSpeech, transformToArray, response);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Generate words that have left context of input word
 * @param  {String} word The input word
 * @param  {Boolean} transformToArray Specify if true then return type array of words otherwise array of objects include extra details
 * @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
 * @param  {String} topics  Optional param to specify which category of the returned words belong to
 * @param  {String} startWith  Optional param to specify what returned words should start with
 * @param  {String} endWith  Optional param to specify what returned words should end with
 * @param  {String} max Optional param to specify number of returned words
 */
const generateWordHasLeftContext = async (
  word,
  transformToArray = false,
  partOfSpeech,
  topics,
  startWith,
  endWith,
  max
) => {
  try {
    const optionalParams = wordOptionalParams(topics, startWith, endWith, max);
    let response = await axios.get(
      `https://api.datamuse.com/words?lc=${word}&${optionalParams}`
    );
    return decorateWords(partOfSpeech, transformToArray, response);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Generate words that have right context of input word
 * @param  {String} word The input word
 * @param  {Boolean} transformToArray Specify if true then return type array of words otherwise array of objects include extra details
 * @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
 * @param  {String} topics  Optional param to specify which category of the returned words belong to
 * @param  {String} startWith  Optional param to specify what returned words should start with
 * @param  {String} endWith  Optional param to specify what returned words should end with
 * @param  {String} max Optional param to specify number of returned words
 */
const generateWordHasRightContext = async (
  word,
  transformToArray = false,
  partOfSpeech,
  topics,
  startWith,
  endWith,
  max
) => {
  try {
    const optionalParams = wordOptionalParams(topics, startWith, endWith, max);
    let response = await axios.get(
      `https://api.datamuse.com/words?rc=${word}&${optionalParams}`
    );
    return decorateWords(partOfSpeech, transformToArray, response);
  } catch (err) {
    console.error(err);
  }
};
module.exports = {
  generateWordMeansLike,
  generateWordSoundsLike,
  generateWordSpelledLike,
  generateWordHasLeftContext,
  generateWordHasRightContext,
};
