const handlerElephants = require('../src/handlerElephants');

/* Argumento / Informação
count / retorna a quantidade de elefantes
names / retorna um array com a relação dos nomes de todos os elefantes
averageAge / retorna a média de idade dos elefantes
location / retorna a localização dos elefantes dentro do Zoológico
popularity / retorna a popularidade dos elefantes
availability / retorna um array com a relação de dias em que é possível visitar os elefantes */

describe('Testes da função HandlerElephants', () => {
  test('return the amount of elephants', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('return a array with the names of elephants', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('return the average of age of elephants', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('return the location of elephants inside the zoo', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('return the popularity of elephants', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('return a array with the relation of days in that it is possible to visit the elephants', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('receive a parameter that not exists and return null', () => {
    expect(handlerElephants('Eddie')).toEqual(null);
  });
  test('receive undefined return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('receive a parameter that is not a string and return a phrase of error: "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(23)).toBeUndefined('Parâmetro inválido, é necessário uma string');
  });
});
