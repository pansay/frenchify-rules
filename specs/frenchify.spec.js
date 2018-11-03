import Frenchify from '../src/frenchify';
import rules from '../rules/rules.json';
import rulesFR from '../rules/rules-fr.json';

describe('Frenchify', () => {
  it('should do no transformations with no rules', () => {
    const frenchify = new Frenchify();
    const txt = 'abc';
    expect(frenchify.applyRules(txt))
      .toBe(txt);
  });

  it('should do transformations', () => {
    const sampleRules = [[
      {
        from: 'abc',
        to: 'def',
      },
    ]];
    const frenchify = new Frenchify(sampleRules);
    const txt = 'abc';
    const txtExpected = 'def';
    expect(frenchify.applyRules(txt))
      .toBe(txtExpected);
  });


  describe('Common rules', () => {
    it('should do transformations', () => {
      const frenchify = new Frenchify([rules]);
      const txt = 'abc --';
      const txtExpected = 'abc –';
      expect(frenchify.applyRules(txt))
        .toBe(txtExpected);
    });
  });

  describe('French rules', () => {
    it('should replace space with non-breakable space', () => {
      const frenchify = new Frenchify([rulesFR]);
      const txt = 'abc : def';
      const txtExpected = 'abc&nbsp;: def';
      expect(frenchify.applyRules(txt))
        .toBe(txtExpected);
    });
  });

});
