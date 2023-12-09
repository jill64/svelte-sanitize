<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-sanitize

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-sanitize)](https://npmjs.com/package/@jill64/svelte-sanitize) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-sanitize)](https://npmjs.com/package/@jill64/svelte-sanitize) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-sanitize)](https://npmjs.com/package/@jill64/svelte-sanitize) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-sanitize)](https://npmjs.com/package/@jill64/svelte-sanitize) [![ci.yml](https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-sanitize/actions/workflows/ci.yml)

💎 Safe html expansion for Svelte with universal-sanitize

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/svelte-sanitize
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
