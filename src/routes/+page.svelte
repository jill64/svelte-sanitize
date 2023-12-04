<script lang="ts">
  import { Render } from '$lib'
  import { onMount } from 'svelte'
  import { code } from './code'

  let browser = false

  onMount(() => {
    browser = true
  })
</script>

<Render html={code(browser)} />

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #161616;
      color: whitesmoke;
    }
  }
</style>
