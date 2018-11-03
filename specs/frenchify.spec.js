import Frenchify from '../src/frenchify';

describe('Frenchify', () => {
  it('should do no transformations with no rules', () => {
    const frenchify = new Frenchify();
    const txt = 'abc';
    expect(frenchify.applyRules(txt))
      .toBe(txt);
  });

  it('should do transformations', () => {
    const rules = [
      {
        from: '--',
        to: '—',
      },
    ];
    const frenchify = new Frenchify([rules]);
    const txt = 'abc --';
    const txtExpected = 'abc —';
    expect(frenchify.applyRules(txt))
      .toBe(txtExpected);
  });
});
