<p align="center">
  <img src="https://user-images.githubusercontent.com/59231851/209891435-14146604-3927-40f9-a439-73ca623a8db6.jpg">
</p>
<p align="center"><b>A javaScript library for generating words using artificial intelligence depending on your needs.
  </b></p>
  
## Description

Smart word generator is a framewjavaScript library for generating words using artificial intelligence depending on your needs. It uses API call to generate words that suits the use case you are facing, you can find the original API used from <a href="https://www.datamuse.com/api/?fbclid=IwAR2GxnfFJqlA78kKGYtPIemRSpA45RAEWqGYCSRCxVyPsWk-0n1n9E6UoOQ" target="_blank">here</a>.

<p>Under the hood, Smart-Word-generator is just working as interface to that API with different easy callable and readable function that would suit your use case.</p>

## Philosophy

<p>In recent years, thanks to AI, most of stuff around us had been managed by AI in someway, AI has multiple fields like computer vision which is related to images and videos, that field made the computers able to see and recognize stuff then take actions depending on that, also there is another field which is NLP (Natural language processing) which is related to words, that field gave machines the ability to understand the language and generate words and sentences.

And here came the idea of smart-word-generator where you do not just generate random words when you  need some real data related to some area or some meaning, or when you want to fill your database with data which is meaningful, in the past, people would just go and enter the data directly if they want meaningful data, but it is the AI era, and that is why we had created smart-word-generator.
</p>

## Questions
For questions and support please email me on: MahmoudMagdyMahmoud1@gmail.com. Or just open new issue here, and for sure, PRs are very welcomed.

## Features
* Generate words have similar meaning to the word you are providing
* Generate words have sound like the word you are providing (the results are pronounced similarly to this string of characters).
* Generate words are spelled like the word you are providing (the results are spelled similarly to this string of characters, or that they match this wildcard pattern).
* Generate words that appears immediately to the left of the target word in a sentence.
* Generate words that appears immediately to the right of the target word in a sentence.
* Provide optional parameters to get more specific data like: 
  * maximum number of generated words
  * the generated words should start with a specific character  
  * the generated words should end with a specific character  
  * the generated words should be in which type (part-of-speech) like (noun, adj, adv, v, ...etc)  
  * the generated words should be in related to which topic
  * the generated words should be represented as array of words or array of objects with extra information  for each word like part of speech and the score of the word
* In progress... 
  
## Installation

```bash
$ npm i smart-word-generator
```
### Params which is provided to all functions by order:
* @param  {String} The input word
* @param  {Boolean} (false by default) transformToArray Specify if true then return type array of words otherwise array of objects include extra details
* @param  {String} partOfSpeech Optional param to specify the part-Of-Speech of returned words 'n' for nouns, 'v' for verbs, 'adj' for adjectives and 'adv' for adverbs
* @param  {String} topics  Optional param to specify which category of the returned words belong to
* @param  {String} startWith  Optional param to specify what returned words should start with
* @param  {String} endWith  Optional param to specify what returned words should end with
* @param  {String} max Optional param to specify number of returned words

## examples
Generate __array of noun words__ have similar meaning to the word __'great'__   
```sh
const smartWordGenerator = require("smart-word-generator");

smartWordGenerator
  .generateWordMeansLike("great", true, "n")
  .then((res) => console.log(res));
# Output: ['big','corking','extraordinary', 'neat', 'bully', 'expectant', 'majuscule', 'uppercase', 'capital', 'groovy', 'pregnant', 'enceinte', 'vast', 'mega',  'massive','immense','hefty','mighty','strong','staggering','full',lot','lofty']
```
Generate __array of objects__ containing words and extra info that have spelling like the word __'flower'__   
```sh
const smartWordGenerator = require("smart-word-generator");

smartWordGenerator
  .generateWordSpelledLike("flower", false)
  .then((res) => console.log(res));
  # Output: [{word:'flower',score:67939,tags:['n']},{word:'lower',score:879,tags:['adj']},{word:'glower',score:710,tags:['n','v']},{word:'blower',score:686,tags:['n']},{word:'slower',score:163,tags:['n']},{word:'flowed',score:129,tags:['v']},{word:'frower',score:109,tags:['n']},{word:'clower',score:95,tags:['n','prop']},{word:'plower',score:57,tags:['n']},{word:'flewer',score:38},{word:'flowen',score:17,tags:['n']},{word:'fower',score:16,tags:['n']}]
```
Generate only __array of words__ which has __length of 5__ that sounds like the word __'flower'__ 
```sh
const smartWordGenerator = require("smart-word-generator");

smartWordGenerator
  .generateWordSoundsLike("flower", true, null, null, null, null, 5)
  .then((res) => console.log(res));
  # Output:['flower','flour','floor','flohr','flaugher']
```
Generate only __array of words__, all of them should start with character __s__ (Note: could be a substring not only a character) that mostly placed to the left of the word like __'computer'__ in most of sentences. 
```sh
const smartWordGenerator = require("smart-word-generator");

smartWordGenerator
  .generateWordHasLeftContext("computer", true, null, null, 's')
  .then((res) => console.log(res));
  # Output:['science','system','systems','software','simulation','screen','simulations','society','security','services','scientists','skills','sciences','screens','storage','support','service','studies','scientist']
```
Generate only __array of words__, all of them should end with character __e__ (Note: could be a substring not only a character) that mostly placed to the left of the word like __'medicine'__ in most of sentences. 
```sh
const smartWordGenerator = require("smart-word-generator");

smartWordGenerator
  .generateWordHasRightContext("medicine", true, null, null, null,'e')
  .then((res) => console.log(res));
  # Output: ['the','preventive','chinese','alternative','practice','some','care','reproductive','take','like','practise','state','palliative']
```
 
## Stay in touch

* Author - [Mahmoud Magdy](MahmoudMagdyMahmoud1@gmail.com)
