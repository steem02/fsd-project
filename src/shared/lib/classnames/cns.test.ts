import cns from 'shared/lib/classnames/cns';

describe('classnames', () => {
  it('with only first param', () => {
    expect(cns('class')).toBe('class');
  });

  it('with additional class', () => {
    expect(cns('class', {}, ['name'])).toBe('class name');
  });

  it('with mods, withot first param', () => {
    expect(cns('class', { hovered: false, navbar: true }, ['name'])).toBe('class navbar name');
  });

  it('with mod undefined', () => {
    expect(cns('class', { hovered: undefined }, [])).toBe('class');
  });

  it('with mod as string', () => {
    expect(cns('class', { hovered: 'string' }, [])).toBe('class hovered');
  });
});
