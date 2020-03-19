import { Remarkable } from "https://unpkg.com/remarkable@2.0.0/dist/esm/index.browser.js";

var md = new Remarkable({
  html: true,
  langPrefix: "language-",
  typographer: true,
  highlight: () => {
    import("./highlighting.js");
  }
});

export const render = (str) => md.render(str);
