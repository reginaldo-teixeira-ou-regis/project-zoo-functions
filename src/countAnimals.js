const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* 5. Implemente a função countAnimals.
Implemente a função countAnimals que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.

A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.

Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

  {
    lions: 4,
    // [...]
  }
Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

O que será testado:

A função countAnimals, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;

A função countAnimals, caso receba como parâmetro um objeto com a chave specie, deve retornar a quantidade de animais daquela espécie;

A função countAnimals, caso receba como parâmetro um objeto com as chaves specie e sex, deve retornar a quantidade de animais daquela espécie, no sexo selecionado. */

const returnAllSpeciesAndAmount = () => species.reduce((acc, animals) => {
  acc[animals.name] = animals.residents.length;
  return acc;
}, {});

const returnKeysAndValue = (animal) => species.find((spec) =>
  (spec.name === animal.specie)).residents.length;

const return2KeysAnd2Values = (animal) => {
  const reside = species.find((spec) => (spec.name === animal.specie)).residents;
  const sx = reside.filter(({ sex }) => sex === animal.sex);
  return sx.length;
};

function countAnimals(animal) {
  if (!animal) {
    return returnAllSpeciesAndAmount();
  }
  if (Object.keys(animal).length === 1) {
    return returnKeysAndValue(animal);
  }
  if (Object.keys(animal).length === 2) {
    return return2KeysAnd2Values(animal);
  }
}
/* console.log(countAnimals()); */
/* console.log(countAnimals({ specie: 'penguins' })); */
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
