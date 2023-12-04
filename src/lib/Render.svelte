<script lang="ts">
  import { sanitize } from '@jill64/universal-sanitizer'

  export let html: string
  export let options: Parameters<typeof sanitize>[1] | undefined = undefined

  $: sanitized = sanitize(html, options)
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html sanitized}
