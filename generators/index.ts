import axios from "axios";
import { wordOptionalParams, decorateWords, GeneratorOptions, DatamuseWord } from "../utils";

/**
 * Base function to generate words from Datamuse API.
 * @param queryParam The primary query parameter (e.g., 'ml', 'sl', 'sp', 'rel_syn').
 * @param word The input word.
 * @param options Generator options.
 */
const generateWords = async (
    queryParam: string,
    word: string,
    options: GeneratorOptions = {}
): Promise<DatamuseWord[] | string[]> => {
    try {
        const optionalParams = wordOptionalParams(options);
        const url = `https://api.datamuse.com/words?${queryParam}=${encodeURIComponent(word)}&${optionalParams}`;

        // Use generic type for axios response
        const response = await axios.get<DatamuseWord[]>(url);

        return decorateWords(response, options);
    } catch (err) {
        console.error(`Error generating words for ${queryParam}=${word}:`, err);
        return [];
    }
};

/**
 * Generate words that have similar meaning to the input word.
 */
export const generateWordMeansLike = (word: string, options?: GeneratorOptions) => {
    return generateWords("ml", word, options);
};

/**
 * Generate words that sound like the input word.
 */
export const generateWordSoundsLike = (word: string, options?: GeneratorOptions) => {
    return generateWords("sl", word, options);
};

/**
 * Generate words that are spelled like the input word.
 */
export const generateWordSpelledLike = (word: string, options?: GeneratorOptions) => {
    return generateWords("sp", word, options);
};

/**
 * Generate words that appear immediately to the left of the target word in a sentence.
 * (Frequent predecessors)
 */
export const generateWordHasLeftContext = (word: string, options?: GeneratorOptions) => {
    // 'lc' is the legacy parameter for left context, equivalent to rel_bgb? 
    // API docs say 'lc' is "Left Context". 
    // We will stick to 'lc' as in original code unless we want to switch to 'rel_bgb'.
    // Let's stick to 'lc' to match exact behavior, but documented as such.
    return generateWords("lc", word, options);
};

/**
 * Generate words that appear immediately to the right of the target word in a sentence.
 * (Frequent followers)
 */
export const generateWordHasRightContext = (word: string, options?: GeneratorOptions) => {
    return generateWords("rc", word, options);
};

/**
 * Generate synonyms for the input word.
 */
export const generateSynonym = (word: string, options?: GeneratorOptions) => {
    return generateWords("rel_syn", word, options);
};

/**
 * Generate antonyms for the input word.
 */
export const generateAntonym = (word: string, options?: GeneratorOptions) => {
    return generateWords("rel_ant", word, options);
};

/**
 * Generate rhymes for the input word.
 */
export const generateRhyme = (word: string, options?: GeneratorOptions) => {
    return generateWords("rel_rhy", word, options);
};

/**
 * Generate adjectives that are often used to describe the given noun.
 */
export const generateAdjectiveForNoun = (word: string, options?: GeneratorOptions) => {
    return generateWords("rel_jjb", word, options);
};

/**
 * Generate nouns that are often described by the given adjective.
 */
export const generateNounForAdjective = (word: string, options?: GeneratorOptions) => {
    return generateWords("rel_jja", word, options);
};

/**
 * Generate related words using a specific relation code.
 * @param relationCode The Datamuse relation code (e.g., 'rel_trg', 'rel_gen').
 */
export const generateRelatedWord = (word: string, relationCode: string, options?: GeneratorOptions) => {
    return generateWords(relationCode, word, options);
};
