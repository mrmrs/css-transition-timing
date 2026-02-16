# css-transition-timing

Functional CSS for transition-timing

## Filesize

| File | Size |
|------|------|
| `dist/transition-timing.css` | 4737 bytes |
| `dist/transition-timing.min.css` | 3861 bytes (437 Gzipped) |

## Install

```sh
npm install css-transition-timing
```

## Usage

### Import

```css
@import "css-transition-timing";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-transition-timing/dist/transition-timing.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-transition-timing/dist/transition-timing.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.transition-ease` | `transition-timing-function: ease;` |
| `.transition-ease-in` | `transition-timing-function: ease-in;` |
| `.transition-ease-out` | `transition-timing-function: ease-out;` |
| `.transition-ease-in-out` | `transition-timing-function: ease-in-out;` |
| `.transition-linear` | `transition-timing-function: linear;` |
| `.transition-step-start` | `transition-timing-function: step-start;` |
| `.transition-step-end` | `transition-timing-function: step-end;` |
| `.transition-steps` | `transition-timing-function: steps(var(--steps, 4), end);` |
| `.transition-cubic1` | `transition-timing-function: ease;` |
| `.transition-cubic2` | `transition-timing-function: ease-in-out;` |
| `.transition-cubic3` | `transition-timing-function: cubic-bezier(.65, 0, .35, 1);` |
| `.transition-cubic4` | `transition-timing-function: cubic-bezier(.76, 0, .24, 1);` |
| `.transition-cubic5` | `transition-timing-function: cubic-bezier(.87, 0, .13, 1);` |
| `.transition-cubic6` | `transition-timing-function: cubic-bezier(.16, 1, .3, 1);` |
| `.transition-inherit` | `transition-timing-function: inherit;` |
| `.transition-ease-s` | `transition-timing-function: ease;` |
| `.transition-ease-in-s` | `transition-timing-function: ease-in;` |
| `.transition-ease-out-s` | `transition-timing-function: ease-out;` |
| `.transition-ease-in-out-s` | `transition-timing-function: ease-in-out;` |
| `.transition-linear-s` | `transition-timing-function: linear;` |
| `.transition-step-start-s` | `transition-timing-function: step-start;` |
| `.transition-step-end-s` | `transition-timing-function: step-end;` |
| `.transition-steps-s` | `transition-timing-function: steps(var(--steps, 4), end);` |
| `.transition-cubic1-s` | `transition-timing-function: ease;` |
| `.transition-cubic2-s` | `transition-timing-function: ease-in-out;` |
| `.transition-cubic3-s` | `transition-timing-function: cubic-bezier(.65, 0, .35, 1);` |
| `.transition-cubic4-s` | `transition-timing-function: cubic-bezier(.76, 0, .24, 1);` |
| `.transition-cubic5-s` | `transition-timing-function: cubic-bezier(.87, 0, .13, 1);` |
| `.transition-cubic6-s` | `transition-timing-function: cubic-bezier(.16, 1, .3, 1);` |
| `.transition-inherit-s` | `transition-timing-function: inherit;` |
| `.transition-ease-m` | `transition-timing-function: ease;` |
| `.transition-ease-in-m` | `transition-timing-function: ease-in;` |
| `.transition-ease-out-m` | `transition-timing-function: ease-out;` |
| `.transition-ease-in-out-m` | `transition-timing-function: ease-in-out;` |
| `.transition-linear-m` | `transition-timing-function: linear;` |
| `.transition-step-start-m` | `transition-timing-function: step-start;` |
| `.transition-step-end-m` | `transition-timing-function: step-end;` |
| `.transition-steps-m` | `transition-timing-function: steps(var(--steps, 4), end);` |
| `.transition-cubic1-m` | `transition-timing-function: ease;` |
| `.transition-cubic2-m` | `transition-timing-function: ease-in-out;` |
| `.transition-cubic3-m` | `transition-timing-function: cubic-bezier(.65, 0, .35, 1);` |
| `.transition-cubic4-m` | `transition-timing-function: cubic-bezier(.76, 0, .24, 1);` |
| `.transition-cubic5-m` | `transition-timing-function: cubic-bezier(.87, 0, .13, 1);` |
| `.transition-cubic6-m` | `transition-timing-function: cubic-bezier(.16, 1, .3, 1);` |
| `.transition-inherit-m` | `transition-timing-function: inherit;` |
| `.transition-ease-l` | `transition-timing-function: ease;` |
| `.transition-ease-in-l` | `transition-timing-function: ease-in;` |
| `.transition-ease-out-l` | `transition-timing-function: ease-out;` |
| `.transition-ease-in-out-l` | `transition-timing-function: ease-in-out;` |
| `.transition-linear-l` | `transition-timing-function: linear;` |
| `.transition-step-start-l` | `transition-timing-function: step-start;` |
| `.transition-step-end-l` | `transition-timing-function: step-end;` |
| `.transition-steps-l` | `transition-timing-function: steps(var(--steps, 4), end);` |
| `.transition-cubic1-l` | `transition-timing-function: ease;` |
| `.transition-cubic2-l` | `transition-timing-function: ease-in-out;` |
| `.transition-cubic3-l` | `transition-timing-function: cubic-bezier(.65, 0, .35, 1);` |
| `.transition-cubic4-l` | `transition-timing-function: cubic-bezier(.76, 0, .24, 1);` |
| `.transition-cubic5-l` | `transition-timing-function: cubic-bezier(.87, 0, .13, 1);` |
| `.transition-cubic6-l` | `transition-timing-function: cubic-bezier(.16, 1, .3, 1);` |
| `.transition-inherit-l` | `transition-timing-function: inherit;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.transition-ease-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/transition-timing.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/transition-timing.css` — formatted
- `dist/transition-timing.min.css` — minified

## License

MIT
