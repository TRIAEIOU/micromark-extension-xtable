var micromark = require('micromark')
var syntax = require('./syntax')
var html = require('./html')

var input = ' '
var output = micromark(input, {extensions: [syntax], htmlExtensions: [html]})
console.log(output)
