const beautify = require("js-beautify").html;
const pug = require("pug");

const input = document.getElementById("input");
input.textContent = "p Enter your pug here.";

const output = document.getElementById("output");

const button = document.getElementById("convert");
button.onclick = function() {
  const html = pug.render(input.value);
  output.textContent = beautify(html);
}
