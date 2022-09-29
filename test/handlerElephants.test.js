const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se recebendo os parametros certos computeData retorna o esperado', () => {
    {
      const actual = handlerElephants('count');
      const expected = 4;
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toBe(expected);
    }

    {
      const actual = handlerElephants('names');
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(expected);
    }

    {
      const actual = handlerElephants('teste');
      expect(actual).toBeNull();
    }
  });

  it('se retorna a localização correta dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('se retorna a popularidade correta dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('se retorna um array com a relação de dias de visita aos elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('se retorna uma string quando o parametro não é do tipo esperado', () => {
    const actual = handlerElephants(5);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('handlerElephants retorna undefined se nada é passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
