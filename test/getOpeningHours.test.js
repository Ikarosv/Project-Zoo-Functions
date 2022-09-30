const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';

  it('sem parâmetros retorno todos os dias', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('se passando os momentos que estará fechado retorna "The zoo is closed"', () => {
    {
      const actual = getOpeningHours('Monday', '09:00-AM');
      expect(actual).toBe(closed);
    }

    {
      const actual = getOpeningHours('Wednesday', '09:00-PM');
      expect(actual).toBe(closed);
    }
  });

  it('se passando os momentos que estará aberto retorna "The zoo is open"', () => {
    {
      const actual = getOpeningHours('Tuesday', '09:00-AM');
      expect(actual).toBe(open);
    }

    {
      const actual = getOpeningHours('Friday', '07:00-PM');
      expect(actual).toBe(open);
    }
  });

  it('se é case insensitive', () => {
    {
      const actual = getOpeningHours('MONDAY', '10:00-AM');
      expect(actual).toBe(closed);
    }

    {
      const actual = getOpeningHours('friday', '10:00-am');
      expect(actual).toBe(open);
    }
  });

  it('se retorna um erro quando não passados os parâmetros corretamente', () => {
    expect(() => getOpeningHours('segunda', '10:00-pm')).toThrow(/^The day must be valid. Example: Monday$/);

    expect(() => getOpeningHours('Monday', '10:00-cm')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);

    expect(() => getOpeningHours('Friday', 'teste:00-pm')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Friday', '16:teste-pm')).toThrow(/^The minutes should represent a number$/);

    expect(() => getOpeningHours('Friday', '16:00-pm')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Friday', '12:70-pm')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
