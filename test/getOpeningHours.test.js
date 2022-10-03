const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna os horarios de toda a semana', () => {
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

  it('retorna uma string com o zoo fechando', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('retorna uma string com o zoo fechando maiusculas', () => {
    const actual = getOpeningHours('MONDAY', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('retorna uma string com o zoo aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('retorna uma string com o zoo aberto', () => {
    const actual = getOpeningHours('Wednesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('dispara erro com a mensagem "The day must be valid. Example: Monday", quando o dia inserido não for correto', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('dispara erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'", quando o abbreviation inserido não for correto', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('dispara erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'", quando a hora inserida não for correto', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('dispara erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'", quando o minuto inserido não for correto', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('dispara erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'", quando o valor hora for maior que 12', () => {
    expect(() => getOpeningHours('MONDAY', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  it('dispara erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'", quando o valor minto for maior a 59', () => {
    expect(() => getOpeningHours('MONDAY', '11:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
