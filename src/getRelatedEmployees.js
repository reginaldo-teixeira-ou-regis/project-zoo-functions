const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* 4. Implemente a função getRelatedEmployees.
Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

Deve retornar true se o id passado for de uma pessoa gerente;
Deve retornar false se o id passado não for de uma pessoa gerente.
A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
Exemplo de output:

[ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
Para lançar o erro, você vai utilizar a função construtora Error da biblioteca padrão do JavaScript.

Exemplo:

throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
Você pode ler mais sobre a função construtora Error, neste link.

O que será testado:

A função isManager deve retornar true se o ID passado for de uma pessoa gerente;

A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;

A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'. */

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers.includes(managerId))
      .map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
