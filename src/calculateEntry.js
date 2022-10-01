const { prices } = require('../data/zoo_data');
const data = require("../data/zoo_data");

/* 8. Implemente a função calculateEntry.
Calcule o valor total da entrada dos visitantes do zoológico.

O valor das entradas do zoológico é calculado a partir da faixa etária, onde:

child: são pessoas menores de 18 anos;

adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;

senior: são pessoas com idade maior ou igual a 50 anos.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de countEntrants e calculateEntry.

As duas funções recebem um array no seguinte formato:

const entrants = [
  { name:  'Lara Carvalho', age:  5 },
  { name:  'Frederico Moreira', age:  5 },
  { name:  'Pedro Henrique Carvalho', age:  5 },
  { name:  'Maria Costa', age:  18 },
  { name:  'Núbia Souza', age:  18 },
  { name:  'Carlos Nogueira', age:  50 },
];

A função countEntrants será responsável por calcular a quantidade de visitantes por faixa etária:

Ela recebe um array e deve retornar um objeto. Para isso:

Realize a soma da quantidade de visitantes por faixa etária;

Retorne um objeto em um formato como esse: { child: 3, adult: 2, senior: 1 }.

A função calculateEntry será responsável por somar o valor da entrada das pessoas no zoológico:
Ela recebe um array e deve retornar a soma total dos valores do ingresso. Para isso:

Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;

Utilize a função countEntrants para ter a quantidade total de pessoas por faixa etária;

Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.

De olho na dica eyes: O valor a ser cobrado pela faixa de idades também consta no arquivo de dados.

Exemplo de uso da função calculateEntry:

calculateEntry(entrants);
Saída:

187.94
O que será testado:

A função countEntrants:

Ao receber um array de visitantes, retorna um objeto com a contagem.
A função calculateEntry:

Retorna 0 se nenhum argumento for passado;

Retorna 0 se um objeto vazio for passado;

Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;

Ao receber um array com 1 pessoa adulta retorna o valor correto;

Ao receber um array com 1 pessoa mais velha retorna o valor correto;

Ao receber um array com 1 criança retorna o valor correto;

Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto. */

const entrantsParameter = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}
/* console.log(countEntrants(entrantsParameter)); */

function calculateEntry(entrants = 0) {
  if (!entrants.length) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const ch = prices.child * child;
  const ad = prices.adult * adult;
  const sn = prices.senior * senior;
  return ch + ad + sn;
}
/* console.log(calculateEntry(entrantsParameter)); */

module.exports = { calculateEntry, countEntrants };
