const ghpages = require("main");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/Tobami94/malenaparaschuk";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
