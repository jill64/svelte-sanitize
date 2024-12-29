<script>
  import { sanitize } from '@jill64/universal-sanitizer'

  /**
   * @typedef {Object} Props
   * @property {string} html
   * @property {Parameters<typeof sanitize>[1]} [options]
   */

  /** @type {Props} */
  let { html, options = undefined } = $props()

  let sanitized = $derived(sanitize(html, options))
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html sanitized}
