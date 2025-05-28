
import * as grammar from "../src/grammar.js";
import * as nearley from "nearley";

// const grammar = require("./grammar.js")
// const nearley = require("nearley")

// const parser = new nearly.Parser(nearly.Grammar.fromCompiled(grammar));
// 
// parser.feed("{{foo bar}}")
// console.log(JSON.stringify(parser.results, null, 2));

const parserII = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

let text = "{{foo<i><b> and\nbar</b> blaat</i>}}{{#Aap\n}}" +
           "{{De ezel liep naar huis}}";

parserII.feed(text)
//console.log(JSON.stringify(parserII.results[0], null, 2));
//console.log("parserII.results.length = " + parserII.results.length);
//
// If parserII.results.length > 1 you've an ambiguous grammar
console.assert(parserII.results.length == 1);
