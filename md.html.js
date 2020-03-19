const markdown = document.querySelector("template").innerHTML;

const cancel = setTimeout(() => {
  document.body.style.whiteSpace = "pre-wrap";
  document.body.innerText = markdown;
}, 500);

import("./converter.js").then(({ render }) => {
  const html = render(markdown);
  clearTimeout(cancel);
  document.body.style.whiteSpace = "initial";
  document.body.innerHTML = html;

  // document.body.hidden = false;
});
