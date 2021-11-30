const array = [1, 'string', [], {}, 'string', 45];

const indexInicio = array.indexOf('string'); //
const indexFinal = array.lastIndexOf('string');

console.log(indexInicio === indexFinal)