export const code = (browser: boolean) => /* html */ `
<header>
  <h1>svelte-sanitize</h1>
  <p>💎 Safe html expansion for Svelte with universal-sanitizer</p>
  <a href="https://github.com/jill64/svelte-sanitize">
    GitHub
  </a>
</header>
<main>
  <span>${browser ? 'This is Render by Browser' : ''}</span>
</main>

<script>
  alert('Find XSS vulnerability !!')
</script>
`
