const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('if not have parameter return the object', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('passing the 2 parameters "(Wednesday, 09:25-AM)" return the zoo is open', () => {
    expect(getOpeningHours('Wednesday', '09:25-AM')).toBe('The zoo is open');
  });
  test('above of 13 hours return a error', () => {
    expect(() => { getOpeningHours('Wednesday', '20:35-PM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  test('above of 60 minutes return a error', () => {
    expect(() => { getOpeningHours('Wednesday', '08:62-PM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  test('without the abbreviation "AM" or "PM" return a error', () => {
    expect(() => { getOpeningHours('Wednesday', '08:42'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('day not valid return a error', () => {
    expect(() => { getOpeningHours('DiaDoCopo', '08:42-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  test('error', () => {
    expect(() => { getOpeningHours('Wednesday', '17'); }).toThrow();
  });
  test('monday the zoo is closed', () => {
    expect(getOpeningHours('Monday', '08:42-AM')).toEqual('The zoo is closed');
  });
});
