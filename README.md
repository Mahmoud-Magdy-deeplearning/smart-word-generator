<p align="center">
  <!-- <img src="./logo.png"> -->
  <!-- Logo generation is temporarily unavailable. Place your logo here. -->
</p>
<h1 align="center">Smart Word Generator</h1>
<p align="center"><b>A TypeScript library for generating words using artificial intelligence depending on your needs.</b></p>
  
## Description

Smart word generator is a library for generating words using artificial intelligence via the [Datamuse API](https://www.datamuse.com/api/). It allows you to find words with similar meanings, sounds, spellings, and various other relationships.

Now fully rewritten in **TypeScript** for better developer experience and type safety!

## Features

* **Type-Safe**: Written in TypeScript with full type definitions.
* **Unified API**: All functions accept a consistent options object.
* **Rich Relationships**: Generate synonyms, antonyms, rhymes, and more.
* **Flexible Filtering**: distinct parts of speech, topics, and patterns.

## Installation

```bash
npm install smart-word-generator
```

## Usage

Import the functions you need from the package:

```typescript
import { 
  generateWordMeansLike, 
  generateRhyme, 
  generateSynonym,
  generateAntonym,
  generateWordSoundsLike
} from "smart-word-generator";
```

### Options Object

All generator functions accept an optional `options` object:

```typescript
interface GeneratorOptions {
  transformToArray?: boolean;   // Return string[] if true, else detailed object[]
  partOfSpeech?: 'n' | 'v' | 'adj' | 'adv';
  topics?: string;              // Context topics
  startWith?: string;           // Filter words starting with...
  endWith?: string;             // Filter words ending with...
  max?: number;                 // Max results
}
```

### Examples

#### Find words with similar meaning
```typescript
const words = await generateWordMeansLike("great", { 
  partOfSpeech: "adj", 
  transformToArray: true,
  max: 5
});
console.log(words); 
// Output: ['big', 'huge', 'vast', 'large', 'grand']
```

#### Find Rhymes
```typescript
const rhymes = await generateRhyme("cat", { max: 5, transformToArray: true });
console.log(rhymes);
// Output: ['hat', 'bat', 'rat', 'mat', 'fat']
```

#### Find Synonyms
```typescript
await generateSynonym("happy");
```

#### Find Antonyms
```typescript
await generateAntonym("hot");
```

#### Find Words Sounding Like
```typescript
await generateWordSoundsLike("flower");
```

#### Find Adjectives describing a Noun
```typescript
// Find adjectives often used to describe 'ocean'
await generateAdjectiveForNoun("ocean");
```

#### Find Nouns described by an Adjective
```typescript
// Find nouns often described as 'blue'
await generateNounForAdjective("blue");
```

## API List

* `generateWordMeansLike(word, options)`
* `generateWordSoundsLike(word, options)`
* `generateWordSpelledLike(word, options)`
* `generateRhyme(word, options)`
* `generateSynonym(word, options)`
* `generateAntonym(word, options)`
* `generateAdjectiveForNoun(word, options)`
* `generateNounForAdjective(word, options)`
* `generateWordHasLeftContext(word, options)`
* `generateWordHasRightContext(word, options)`
* `generateRelatedWord(word, relationCode, options)`

## License
ISC
