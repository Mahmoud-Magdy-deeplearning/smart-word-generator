import { AxiosResponse } from 'axios';

export interface DatamuseWord {
    word: string;
    score: number;
    tags?: string[];
    defs?: string[];
    numSyllables?: number;
}

export interface GeneratorOptions {
    /**
     * If true, return an array of strings (words) instead of an array of objects.
     * @default false
     */
    transformToArray?: boolean;
    /**
     * Filter result by part-of-speech: 'n' (noun), 'v' (verb), 'adj' (adjective), 'adv' (adverb).
     */
    partOfSpeech?: 'n' | 'v' | 'adj' | 'adv';
    /**
     * Topic words to influence the result.
     */
    topics?: string;
    /**
     * Filter results to words starting with this string/character.
     */
    startWith?: string;
    /**
     * Filter results to words ending with this string/character.
     */
    endWith?: string;
    /**
     * Maximum number of results to return.
     */
    max?: number;
}

export const wordOptionalParams = (options: GeneratorOptions): string => {
    const { topics, startWith, endWith, max } = options;
    const params: string[] = [];

    if (topics) {
        params.push(`topics=${encodeURIComponent(topics)}`);
    }
    if (max) {
        params.push(`max=${max}`);
    }

    const start = startWith || "";
    const end = endWith || "";
    // 'sp' stands for spelled like. Wildcards * are used.
    params.push(`sp=${start}*${end}`);

    // 'md=p' requests part-of-speech tags
    params.push("md=p");

    return params.join('&');
};

const filterWords = (words: DatamuseWord[], type: string): DatamuseWord[] => {
    return words.filter((word) => {
        return word.tags && word.tags.includes(type);
    });
};

const arrayOfWordsTransformer = (words: DatamuseWord[]): string[] => {
    return words.map((w) => w.word);
};

export const decorateWords = (
    response: AxiosResponse<DatamuseWord[]>,
    options: GeneratorOptions
): DatamuseWord[] | string[] => {
    // Extract data safely
    let words = response.data || [];

    // Filter by part of speech if requested
    if (options.partOfSpeech) {
        words = filterWords(words, options.partOfSpeech);
    }

    // Transform to simple array if requested
    if (options.transformToArray) {
        return arrayOfWordsTransformer(words);
    }

    return words;
};
