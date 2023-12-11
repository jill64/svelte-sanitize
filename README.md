<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-sanitize

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/v/@jill64/svelte-sanitize" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/l/@jill64/svelte-sanitize" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/npm/dm/@jill64/svelte-sanitize" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-sanitize"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-sanitize" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a><!----- END GHOST DOCS BADGES ----->

💎 Safe html expansion for Svelte with universal-sanitize

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
