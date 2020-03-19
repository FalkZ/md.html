import { Remarkable } from "https://unpkg.com/remarkable@2.0.0/dist/esm/index.browser.js";

export let options;

const isLocal = () =>
  /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(localhost)/.test(
    window.location.hostname
  );
const optionPormise = new Promise(
  (resolve) => (options = (ops) => resolve(ops))
);

const button = (value, update) => {
  const b = document.createElement("button");
  b.onclick = update;
  b.style.borderRadius = "1em";
  b.style.height = "1.7em";
  b.style.width = "1.7em";
  b.style.textAlign = "center";
  b.style.border = "none";
  b.style.margin = "0.5em";
  b.style.outline = "none";
  b.onfocus = ({ target }) => {
    target.style.border = "1px solid lightblue";
  };
  b.onblur = ({ target }) => {
    target.style.border = "1px solid rgba(0,0,0,0)";
  };

  b.appendChild(document.createTextNode(value));

  return b;
};

const link = () => {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  return l;
};
const aside = (themes) => {
  const aside = document.createElement("aside");
  const p = document.createElement("span");
  const css = link();

  document.head.appendChild(css);
  let index = 0;

  const update = (inc) => {
    index += inc;
    p.innerText = themes[index];
    css.href = "./themes/" + themes[index];
    min.disabled = false;
    max.disabled = false;

    if (index === 0) min.disabled = true;
    if (index === themes.length - 1) max.disabled = true;
  };

  const min = button("<", update.bind(null, -1));
  const max = button(">", update.bind(null, 1));

  update(0);
  [
    document.createTextNode("select syntax theme: "),
    min,
    p,
    max
  ].forEach((el) => aside.appendChild(el));

  document.body.prepend(aside);
};
optionPormise.then(({ theme } = {}) => {
  if (isLocal() && !theme) {
  }
});
const l = document.createElement("link");
l.rel = "stylesheet";

document.head.appendChild(l);

if (isLocal) {
  const a = document.createElement("a");
  a.innerText = "edit syntax theme";
  a.href =
    "https://k88hudson.github.io/syntax-highlighting-theme-generator/www/";
  document.body.prepend(a);
}
export default new Proxy(
  {},
  {
    set: (target, key, value) => {
      if (key === "theme") {
        l.href = value.replace(
          "data:application/octet-stream;",
          "data:text/css;"
        );
        target[key] = value;

        return true;
      }
    }
  }
);

var md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer: false

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
});

document.body.style.whiteSpace = "pre-wrap";

// const renderer = new marked.Renderer({
//   highlight: function(code, lang, callback) {
//     import(
//       `https://unpkg.com/prismjs@1.19.0/components/prism-${lang}.js`
//     ).then(() => callback(Prism.highlight(code, Prism.languages[lang], lang)));
//   }
// });

// console.log(marked.setOptions());

// console.log(renderer);

const m = document.querySelector("template").innerHTML;

document.body.innerText = m;
document.body.innerHTML = md.render(m);

document.body.style.whiteSpace = "initial";

import "https://unpkg.com/prismjs@v1.19.0/components/prism-core.min.js";
import "https://unpkg.com/prismjs@v1.19.0/plugins/autoloader/prism-autoloader.min.js";

Prism.plugins.autoloader.languages_path =
  "https://unpkg.com/prismjs@1.19.0/components/";
