import data from './data/chuvaDeMeteoro.js'
import {filtroChuvaHoje, filtroChuvaProximosMeses} from './services/filtrosChuvaDeMeteoro.js'

const chuvasHoje = data.filter(filtroChuvaHoje);
const chuvasProximos2Meses = data.filter(filtroChuvaProximosMeses);

console.log(chuvasHoje.length)
console.log(chuvasProximos2Meses.length)