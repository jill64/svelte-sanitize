export const code = /* html */ `
<script>
  import { Render } from '@jill64/svelte-sanitize'
  
  let browser = $state(false)

  $effect(() => {
    browser = true
  })
</script>

<Render html="<h2>🌐 This is Rendered by Server</h2>" />

{#if browser}
  <Render html="<h2>💻 This is Rendered by Browser</h2>" />
{/if}
`.trim()
