const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* 10. Implemente a função getOldestFromFirstSpecies.
Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

A função deverá encontrar o animal mais velho daquela espécie;

A função deverá retornar um array com as informações do animal mais velho daquela espécie.

O que será testado:

Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie. */

const animalId = (id) => employees.find((spec) => spec.id === id).responsibleFor[0];

const getOldestFromFirstSpecies = (id) => Object.values(species.find((spec) =>
  spec.id === animalId(id)).residents.sort((p, s) => s.age - p.age)[0]);

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
