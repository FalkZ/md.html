# md.html

## Browser compatible markdown without compilation

### `example.md.html` head

```html
<meta charset="UTF-8" />
<title>Document</title>

<script type="module">
  import config from "https://unpkg.com/md.html.js@0.0.1";
  config.theme =
    "data:application/octet-stream;charset=utf-8,%2F*%20Generated%20with%20http%3A%2F%2Fk88hudson.github.io%2Fsyntax-highlighting-theme-generator%2Fwww%20*%2F%0A%2F*%20http%3A%2F%2Fk88hudson.github.io%2Freact-markdocs%20*%2F%0A%2F**%0A%20*%20%40author%20k88hudson%0A%20*%0A%20*%20Based%20on%20prism.js%20default%20theme%20for%20JavaScript%2C%20CSS%20and%20HTML%0A%20*%20Based%20on%20dabblet%20(http%3A%2F%2Fdabblet.com)%0A%20*%20%40author%20Lea%20Verou%0A%20*%2F%0A%2F*********************************************************%0A*%20General%0A*%2F%0Apre%5Bclass*%3D%22language-%22%5D%2C%0Acode%5Bclass*%3D%22language-%22%5D%20%7B%0A%20%20color%3A%20%235c6e74%3B%0A%20%20font-size%3A%2013px%3B%0A%20%20text-shadow%3A%20none%3B%0A%20%20font-family%3A%20Consolas%2C%20Monaco%2C%20'Andale%20Mono'%2C%20'Ubuntu%20Mono'%2C%20monospace%3B%0A%20%20direction%3A%20ltr%3B%0A%20%20text-align%3A%20left%3B%0A%20%20white-space%3A%20pre%3B%0A%20%20word-spacing%3A%20normal%3B%0A%20%20word-break%3A%20normal%3B%0A%20%20line-height%3A%201.5%3B%0A%20%20-moz-tab-size%3A%204%3B%0A%20%20-o-tab-size%3A%204%3B%0A%20%20tab-size%3A%204%3B%0A%20%20-webkit-hyphens%3A%20none%3B%0A%20%20-moz-hyphens%3A%20none%3B%0A%20%20-ms-hyphens%3A%20none%3B%0A%20%20hyphens%3A%20none%3B%0A%7D%0Apre%5Bclass*%3D%22language-%22%5D%3A%3Aselection%2C%0Acode%5Bclass*%3D%22language-%22%5D%3A%3Aselection%2C%0Apre%5Bclass*%3D%22language-%22%5D%3A%3Amozselection%2C%0Acode%5Bclass*%3D%22language-%22%5D%3A%3Amozselection%20%7B%0A%20%20text-shadow%3A%20none%3B%0A%20%20background%3A%20%23b3d4fc%3B%0A%7D%0A%40media%20print%20%7B%0A%20%20pre%5Bclass*%3D%22language-%22%5D%2C%0A%20%20code%5Bclass*%3D%22language-%22%5D%20%7B%0A%20%20%20%20text-shadow%3A%20none%3B%0A%20%20%7D%0A%7D%0Apre%5Bclass*%3D%22language-%22%5D%20%7B%0A%20%20padding%3A%201em%3B%0A%20%20margin%3A%20.5em%200%3B%0A%20%20overflow%3A%20auto%3B%0A%20%20background%3A%20%23f8f5ec%3B%0A%7D%0A%3Anot(pre)%20%3E%20code%5Bclass*%3D%22language-%22%5D%20%7B%0A%20%20padding%3A%20.1em%20.3em%3B%0A%20%20border-radius%3A%20.3em%3B%0A%20%20color%3A%20%23db4c69%3B%0A%20%20background%3A%20%23f9f2f4%3B%0A%7D%0A%2F*********************************************************%0A*%20Tokens%0A*%2F%0A.namespace%20%7B%0A%20%20opacity%3A%20.7%3B%0A%7D%0A.token.comment%2C%0A.token.prolog%2C%0A.token.doctype%2C%0A.token.cdata%20%7B%0A%20%20color%3A%20%2393a1a1%3B%0A%7D%0A.token.punctuation%20%7B%0A%20%20color%3A%20%23999999%3B%0A%7D%0A.token.property%2C%0A.token.tag%2C%0A.token.boolean%2C%0A.token.number%2C%0A.token.constant%2C%0A.token.symbol%2C%0A.token.deleted%20%7B%0A%20%20color%3A%20%23990055%3B%0A%7D%0A.token.selector%2C%0A.token.attr-name%2C%0A.token.string%2C%0A.token.char%2C%0A.token.builtin%2C%0A.token.inserted%20%7B%0A%20%20color%3A%20%23669900%3B%0A%7D%0A.token.operator%2C%0A.token.entity%2C%0A.token.url%2C%0A.language-css%20.token.string%2C%0A.style%20.token.string%20%7B%0A%20%20color%3A%20%23a67f59%3B%0A%20%20background%3A%20%23ffffff%3B%0A%7D%0A.token.atrule%2C%0A.token.attr-value%2C%0A.token.keyword%20%7B%0A%20%20color%3A%20%230077aa%3B%0A%7D%0A.token.function%20%7B%0A%20%20color%3A%20%23dd4a68%3B%0A%7D%0A.token.regex%2C%0A.token.important%2C%0A.token.variable%20%7B%0A%20%20color%3A%20%23ee9900%3B%0A%7D%0A.token.important%2C%0A.token.bold%20%7B%0A%20%20font-weight%3A%20bold%3B%0A%7D%0A.token.italic%20%7B%0A%20%20font-style%3A%20italic%3B%0A%7D%0A.token.entity%20%7B%0A%20%20cursor%3A%20help%3B%0A%7D%0A%2F*********************************************************%0A*%20Line%20highlighting%0A*%2F%0Apre%5Bdata-line%5D%20%7B%0A%20%20position%3A%20relative%3B%0A%7D%0Apre%5Bclass*%3D%22language-%22%5D%20%3E%20code%5Bclass*%3D%22language-%22%5D%20%7B%0A%20%20position%3A%20relative%3B%0A%20%20z-index%3A%201%3B%0A%7D%0A.line-highlight%20%7B%0A%20%20position%3A%20absolute%3B%0A%20%20left%3A%200%3B%0A%20%20right%3A%200%3B%0A%20%20padding%3A%20inherit%200%3B%0A%20%20margin-top%3A%201em%3B%0A%20%20background%3A%20%23f7ebc6%3B%0A%20%20box-shadow%3A%20inset%205px%200%200%20%23f7d87c%3B%0A%20%20z-index%3A%200%3B%0A%20%20pointer-events%3A%20none%3B%0A%20%20line-height%3A%20inherit%3B%0A%20%20white-space%3A%20pre%3B%0A%7D%0A";
</script>

<link
  href="https://fonts.googleapis.com/css?family=Sen:400,700,800&display=swap"
  rel="stylesheet"
/>

<style>
  body {
    font-family: "Sen", sans-serif;
    white-space: pre-wrap;
  }
</style>
```

### `example.md.html` body

```markdown
<template id="markdown">

# Title

Write markdown here...

\`\`\`javascript
// with syntax highlighting
\`\`\`

</template>
```

|   Table  |     |
| :-- | :-- |
|     |     |
