
# md.html

#### Browser compatible markdown without compilation

## Features

- **no compilation** required
- **syntax highlighting** out of the box
- **single file** for styles and markup
- **loading on demand**: <br> loads highlighting and language support only when needed
- **progressive loading**: <br> loads content first, for fast access over slow networks

## Getting Started

### Document head

Just add the `md.html.js` script:

```html
<script src="https://unpkg.com/md.html.js@0.0.5" type="module"></script>
```

### Document body

Now you can write normal markdown inside the template tag:

```markdown
<template>

  # Title

  Write markdown here...
    
    ```javascript
    // with syntax highlighting
    ```

</template>
```

### Styles

Just add styles to the head, as you normally would:

```css
<style>
  body {
    font-family: 'Sen', sans-serif;
    max-width: 640px;
    padding: 10px;
    margin: 0 auto;
    font-size: 18px;
  }
</style>
```

### Syntax Highlighting
The default colors of the syntax highlighting can be changed like so

```css
code {
  --base-color: #5c6e74;
  --comment-color: #93a1a1;
  --punctuation-color: #999;
  --property-color: #905;
  --selector-color: #690;
  --operator-color: #a67f59;
  --variable-color: #e90;
  --keyword-color:  #07a;
  --function-color: #dd4a68; 
}
```


### Demo

Here is the [demo page](https://unpkg.com/md.html.js/demo/md.html). If you want to edit it just right click `show source` to get your own copy.

## Editing

For easy editing in VSCode use the following settings:

```json
{
  "files.associations": {
  "*.md.html": "markdown"
  },
  "[markdown]": {
    "editor.wordWrap": false
  }
}
```

and of course the corresponding file extension `.md.html` for your files.

--- 
created with [md.html](https://unpkg.com/md.html.js/demo/md.html)
