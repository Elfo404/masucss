var postcss = require("postcss");

module.exports = postcss.plugin("postcss-masucss", function(opts) {
  opts = opts || {};

  return function(css) {
    css.eachDecl(function transformDecl(decl) {
      decl.value = decl.value.replace("glugluglu", "blue");

      if (decl.value.indexOf("!tacchino") >= 0) {
        decl.value = decl.value.replace(/\s*!tacchino\s*/, "");
        decl.important = true;
      }
    });
  };
});
