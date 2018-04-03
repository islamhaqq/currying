# Currying

A NPM package that allows you to create partial functions!

## How to Install

```sh
# node
$ npm install --save @syednashikaman/currying

# yarn
$ yarn add @syednashikaman/currying
```

## How to Use

```javascript
// your-file.js
require('currying');

function say(firstWord, secondWord) {
  return firstWord + ' ' + secondWord;
}

const sayHello = say.curry('Hello');
sayHello('world!'); // "Hello world!"
```
