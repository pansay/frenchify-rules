// export default class Frenchify {
//   rulesArray = [];

//   constructor(rulesArray) {
//     this.rulesArray = rulesArray;
//   }

//   applyRules(content) {
//     this.rulesArray.forEach(rules => {
//       content = this.replace(content, rules);
//     });
//     return content;
//   }

//   replace(content, rules) {
//     rules.forEach(rule => {
//       content = content.replace(new RegExp(rule.from, 'gmi'), rule.to);
//     });
//     return content;
//   }
// }
