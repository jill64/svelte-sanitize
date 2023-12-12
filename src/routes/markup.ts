export const markup = (browser: boolean) =>
  /* html */ `
<h2>🌐 This is Rendered by Server</h2>
${browser ? '<h2>💻 This is Rendered by Browser' : ''}

<script>throw new Error("Unexpected XSS Vulnerability")</script>
`.trim()
