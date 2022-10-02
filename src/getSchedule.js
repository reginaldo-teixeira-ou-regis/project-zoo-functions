const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

/* 9. Implemente a função getSchedule.
Implemente a função getSchedule que irá disponibilizar um cronograma com os horários de visita da semana disponíveis para cada espécie de animal.

As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.

Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
Retorne todos os horários disponíveis para cada dia da semana caso a função:

- não receba parâmetro;

- o parâmetro passado para a função não seja um animal ou um dia;
Para isso:

Crie um objeto e adicione todos os dias da semana como chave;

Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:

officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

O retorno deve ser parecido com esse:
De olho na dica eyes: Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.

O que será testado:

A função, caso receba o nome de um animal por parâmetro, deverá retornar um array com os dias em que ele estará em exibição;

A função caso não receba parâmetros, deverá retornar os horários para cada dia e quais animais estarão disponíveis;

A função, caso receba parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;

A função, caso receba um único dia por parâmetro, deverá retornar os horários para aquele dia e quais animais estarão disponíveis. */

const visitingHours = {
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Sunday'))
      .map((specie) => specie.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Tuesday'))
      .map((specie) => specie.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Wednesday'))
      .map((specie) => specie.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Thursday'))
      .map((specie) => specie.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Friday'))
      .map((specie) => specie.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Saturday'))
      .map((specie) => specie.name),
  },
};

const animalName = (name) => species.find((spec) => spec.name === name).availability;

const hoursAnimalsAvailable = (dayWeek) => {
  const weekDay = {
    [dayWeek]: {
      officeHour: `Open from ${hours[dayWeek].open}am until ${hours[dayWeek].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(dayWeek))
        .map((specie) => specie.name),
    },
  };
  return weekDay;
};

const { Monday } = visitingHours;

function getSchedule(scheduleTarget) {
  if (species.some((spec) => spec.name === scheduleTarget)) {
    return animalName(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget) && scheduleTarget !== 'Monday') {
    return hoursAnimalsAvailable(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return { Monday };
  }
  return visitingHours;
}
/* console.log(getSchedule('lions'));
console.log(' ');
console.log(getSchedule('Wednesday'));
console.log(' ');
console.log(getSchedule('Monday'));
console.log(' ');
console.log(getSchedule()); */

module.exports = getSchedule;
