<script lang="ts">
  import { Render } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { is } from 'svelte-hydrated'
  import { code } from './code'
  import { markup } from './markup'
</script>

<main>
  <div>
    <Render html={markup(is.hydrated)} />
  </div>
  <div style:font-size="large" style:overflow-x="auto">
    <HighlightSvelte {code} />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 2rem;
  }
  @media (max-width: 800px) {
    main {
      grid-template-columns: auto;
    }
  }
</style>
