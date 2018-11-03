import Frenchify from '../src/frenchify';
import rules from '../rules/rules.json';

describe('Frenchify', () => {
  it('should do no transformations with no rules', () => {
    const frenchify = new Frenchify();
    const txt = 'abc';
    expect(frenchify.applyRules(txt))
      .toBe(txt);
  });

  it('should do transformations', () => {
    const sampleRules = [
      {
        from: '--',
        to: '—',
      },
    ];
    const frenchify = new Frenchify([sampleRules]);
    const txt = 'abc --';
    const txtExpected = 'abc —';
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

});
