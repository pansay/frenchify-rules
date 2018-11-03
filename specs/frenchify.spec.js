import Frenchify from '../src/frenchify';

describe('Frenchify', () => {
  it('should...', () => {
    const frenchify = new Frenchify();
    const txt = 'abc';
    expect(
      frenchify.applyRules(txt)
    ).toBe(
      txt
    );
  });

  it('should...', () => {
    const rules = [
      {
        "from": "--",
        "to": "—",
      },
    ];

    const frenchify = new Frenchify([rules]);
    const txt = 'abc';
    expect(
      frenchify.applyRules(txt)
    ).toBe(
      txt
    );
  });

});
