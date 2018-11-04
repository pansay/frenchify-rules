import Frenchify from './src/frenchify';
import rules from './rules/rules.json';
import rulesFR from './rules/rules-fr.json';
import rulesES from './rules/rules-es.json';
import rulesEN from './rules/rules-en.json';

const languageRules = [
  {
    id: 'fr',
    rules: rulesFR,
  },
  {
    id: 'en',
    rules: rulesEN,
  },
  {
    id: 'es',
    rules: rulesES,
  },
];

export default { Frenchify, rules, languageRules };
