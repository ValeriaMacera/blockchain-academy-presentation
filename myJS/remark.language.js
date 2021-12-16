/*
Language: remark markdown flavor
Author: Ole Petter Bang <olepbang@gmail.com>
*/

/*
20-nov-20: local copy of 
https://remarkjs.com/remark.language.js
*/

hljs.registerLanguage('remark', function () {
  return {
    contains: [
      {
        className: 'keyword',
        begin: '^#+[^\n]+',
        relevance: 10
      },
      {
        className: 'comment',
        begin: '^---?'
      },
      {
        className: 'string',
        begin: '^\\w+:'
      },
      {
        className: 'literal',
        begin: '\\{\\{', end: '\\}\\}'
      },
      {
        className: 'string',
        begin: '\\.\\w+'
      }
    ]
  };
});