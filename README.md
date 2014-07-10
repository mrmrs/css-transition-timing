# CSS TRANSITION TIMING

  Mobile-first classes for css-transition-timing.
  Set the desired css-transition-timing on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
```
npm install --save-dev css-transition-timing
```
or download the css on github and include in your project.

## File Size


## The Code
```
.ttf-e {     transition-timing-function: ease; }
.ttf-ei {    transition-timing-function: ease-in; }
.ttf-eo {    transition-timing-function: ease-out; }
.ttf-eio {   transition-timing-function: ease-in-out; }
.ttf-lin {   transition-timing-function: linear; }
.ttf-cb {    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }
.ttf-ss {    transition-timing-function: step-start; }
.ttf-se  {   transition-timing-function: step-end; }
.ttf-steps { transition-timing-function: steps(4, end); }
.ttf-i {     transition-timing-function: inherit; }

@include break(not-small) {
  .ttf-e-ns { 	  transition-timing-function: ease; }
  .ttf-ei-ns {    transition-timing-function: ease-in; }
  .ttf-eo-ns {    transition-timing-function: ease-out; }
  .ttf-eio-ns {   transition-timing-function: ease-in-out; }
  .ttf-nsin-ns {  transition-timing-function: linear; }
  .ttf-cb-ns {    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }
  .ttf-ss-ns {    transition-timing-function: step-start; }
  .ttf-se-ns  {   transition-timing-function: step-end; }
  .ttf-steps-ns { transition-timing-function: steps(4, end); }
  .ttf-i-ns {     transition-timing-function: inherit; }
}

@include break(medium) {
  .ttf-e-m {      transition-timing-function: ease; }
  .ttf-ei-m {     transition-timing-function: ease-in; }
  .ttf-eo-m {     transition-timing-function: ease-out; }
  .ttf-eio-m {    transition-timing-function: ease-in-out; }
  .ttf-min-m {    transition-timing-function: linear; }
  .ttf-cb-m {     transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }
  .ttf-ss-m {     transition-timing-function: step-start; }
  .ttf-se-m  {    transition-timing-function: step-end; }
  .ttf-steps-m {  transition-timing-function: steps(4, end); }
  .ttf-i-m {      transition-timing-function: inherit; }
}

@include break(large) {
  .ttf-e-l {      transition-timing-function: ease; }
  .ttf-ei-l {     transition-timing-function: ease-in; }
  .ttf-eo-l {     transition-timing-function: ease-out; }
  .ttf-eio-l {    transition-timing-function: ease-in-out; }
  .ttf-lin-l {    transition-timing-function: linear; }
  .ttf-cb-l {     transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }
  .ttf-ss-l {     transition-timing-function: step-start; }
  .ttf-se-l  {    transition-timing-function: step-end; }
  .ttf-steps-l {  transition-timing-function: steps(4, end); }
  .ttf-i-l {      transition-timing-function: inherit; }
}

```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

