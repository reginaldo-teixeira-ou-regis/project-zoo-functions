const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const locationByRegion = () => {
  const locality = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.map((specie) => locality[specie.location].push(specie.name));
  return locality;
};

const locationByRegionName = (sorted, sex) => species.reduce((acc, cur) => {
  const obj = {
    [cur.name]: cur.residents.map(({ name }) => name),
  };
  if (sex) {
    obj[cur.name] = cur.residents.filter((animal) => animal.sex === sex)
      .map(({ name }) => name);
  }
  if (sorted) {
    obj[cur.name].sort();
  }
  acc[cur.location].push(obj);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  if (!options || !options.includeNames) return locationByRegion();
  if (options.includeNames) return locationByRegionName(options.sorted, options.sex);
}
/* console.log(getAnimalMap({ sorted: true })); */
/* console.log(' ');
console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }).NE); */

module.exports = getAnimalMap;
