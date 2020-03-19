const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), process.argv[2]);
fs.writeFileSync(
  path.join(dir, "index.json"),
  JSON.stringify(
    fs.readdirSync(dir).filter((name) => name !== "index.json"),
    null,
    2
  )
);
