<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-sanitize

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/v/@jill64/svelte-sanitize" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/l/@jill64/svelte-sanitize" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/dm/@jill64/svelte-sanitize" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-sanitize" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-sanitize.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-sanitize.jill64.dev" alt="website" /></a>

<!----- END GHOST DOCS BADGES ----->

💎 Safe html expansion for Svelte with universal-sanitize

## [Demo](https://svelte-sanitize.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/svelte-sanitize
```

If you have problems building with pnpm, try the following

```sh
pnpm i -D @jill64/universal-sanitizer
```

## Usage

```svelte
<script>
  import { Render } from '@jill64/svelte-sanitize'
</script>

<Render
  html={/* dirty html */}
  options={/* {
    sanitizeHtml?: sanitize-html options
    dompurify?: DOMPurify options
  } */}
/>
```

Same as all parameters [`@jill64/universal-sanitize`](https://github.com/jill64/universal-sanitizer#readme)

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
