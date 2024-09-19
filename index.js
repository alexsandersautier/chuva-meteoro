import data from './data/chuvaDeMeteoro.js'
import tipoChuva from './helpers/tipoChuva.js';
import {filtroChuvaHoje, filtroChuvaProximosMeses} from './services/filtrosChuvaDeMeteoro.js'
import imprimirChuva from './services/imprimirChuvas.js';

const chuvasHoje = data.filter(filtroChuvaHoje);
const chuvasProximos2Meses = data.filter(filtroChuvaProximosMeses);

imprimirChuva(chuvasHoje, tipoChuva.hoje);
imprimirChuva(chuvasProximos2Meses, tipoChuva.Meses);