const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/md.html.js@0.0.5/syntax-highlighting.css";
document.head.prepend(link);

import "https://unpkg.com/prismjs@v1.19.0/components/prism-core.min.js";
import "https://unpkg.com/prismjs@v1.19.0/plugins/autoloader/prism-autoloader.min.js";

Prism.plugins.autoloader.languages_path =
  "https://unpkg.com/prismjs@1.19.0/components/";
