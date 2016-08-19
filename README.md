# css-transition-timing 0.0.6

Css module of single purpose classes for transition timing

#### Stats

382 | 40 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-transition-timing
```

#### With Git

```
git clone https://github.com/tachyons-css/css-transition-timing
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-transition-timing";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-transition-timing">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   TRANSITION TIMING
*/
.ttf-e { transition-timing-function: ease; }
.ttf-ei { transition-timing-function: ease-in; }
.ttf-eo { transition-timing-function: ease-out; }
.ttf-eio { transition-timing-function: ease-in-out; }
.ttf-lin { transition-timing-function: linear; }
.ttf-cb { transition-timing-function: cubic-bezier( 0.1, 0.7, 1.0, 0.1 ); }
.ttf-ss { transition-timing-function: step-start; }
.ttf-se { transition-timing-function: step-end; }
.ttf-steps { transition-timing-function: steps( 4, end ); }
.ttf-i { transition-timing-function: inherit; }
@media screen and (min-width: 48em) {
 .ttf-e-ns { transition-timing-function: ease; }
 .ttf-ei-ns { transition-timing-function: ease-in; }
 .ttf-eo-ns { transition-timing-function: ease-out; }
 .ttf-eio-ns { transition-timing-function: ease-in-out; }
 .ttf-nsin-ns { transition-timing-function: linear; }
 .ttf-cb-ns { transition-timing-function: cubic-bezier( 0.1, 0.7, 1.0, 0.1 ); }
 .ttf-ss-ns { transition-timing-function: step-start; }
 .ttf-se-ns { transition-timing-function: step-end; }
 .ttf-steps-ns { transition-timing-function: steps( 4, end ); }
 .ttf-i-ns { transition-timing-function: inherit; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .ttf-e-m { transition-timing-function: ease; }
 .ttf-ei-m { transition-timing-function: ease-in; }
 .ttf-eo-m { transition-timing-function: ease-out; }
 .ttf-eio-m { transition-timing-function: ease-in-out; }
 .ttf-min-m { transition-timing-function: linear; }
 .ttf-cb-m { transition-timing-function: cubic-bezier( 0.1, 0.7, 1.0, 0.1 ); }
 .ttf-ss-m { transition-timing-function: step-start; }
 .ttf-se-m { transition-timing-function: step-end; }
 .ttf-steps-m { transition-timing-function: steps( 4, end ); }
 .ttf-i-m { transition-timing-function: inherit; }
}
@media screen and (min-width: 64em) {
 .ttf-e-l { transition-timing-function: ease; }
 .ttf-ei-l { transition-timing-function: ease-in; }
 .ttf-eo-l { transition-timing-function: ease-out; }
 .ttf-eio-l { transition-timing-function: ease-in-out; }
 .ttf-lin-l { transition-timing-function: linear; }
 .ttf-cb-l { transition-timing-function: cubic-bezier( 0.1, 0.7, 1.0, 0.1 ); }
 .ttf-ss-l { transition-timing-function: step-start; }
 .ttf-se-l { transition-timing-function: step-end; }
 .ttf-steps-l { transition-timing-function: steps( 4, end ); }
 .ttf-i-l { transition-timing-function: inherit; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC
