# nodejs-email-validation

Nodejs-email-validation is a zero-dependency module that validate emils.

## Install

```bash
npm install nodejs-email-validation
yarn add nodejs-email-validation
```

## Usage

#### Javascript

```js
const emailValidation = require('nodejs-email-validation')

emailValidation.validate('example@gmail.com') // true
```

#### Typescript

```ts
import * as emailValidation from 'nodejs-email-validation'

emailValidation.validate('example@gmail.com') // true
```

## Development

### Testing

#### Install required packages

```
$ sudo npm -g install mocha
```

#### Run tests

```
$ npm test
```
