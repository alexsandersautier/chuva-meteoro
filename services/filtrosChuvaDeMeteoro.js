import formatterData from './formatter.js';


const dataAtual = new Date();

function validateCurrentMonth(data) {
    if (dataAtual.getMonth() > data.getMonth()) {
        return  new Date(data.setFullYear(dataAtual.getFullYear() + 1));
    } else {
        return data;
    }
}

function filtroChuvaHoje(chuva){
    const dataAtualFormatted = formatterData(dataAtual, 'MM/DD');
    return chuva.inicio ==  dataAtualFormatted || chuva.fim == dataAtualFormatted;
}

function filtroChuvaProximosMeses(chuva){
    let dataInicial = new Date(`${dataAtual.getFullYear}/${chuva.inicio}`);
    let dataFinal = new Date(`${dataAtual.getFullYear}/${chuva.fim}`);
    const data2Mese = new Date(new Date().setMonth(dataAtual.getMonth() + 2));

    dataInicial = validateCurrentMonth(dataInicial);
    dataFinal = validateCurrentMonth(dataFinal);
   
    console.log("dataAtual", dataAtual)
    console.log("dataInicial", dataInicial)
    console.log("data2Mese", data2Mese)
    return dataAtual < dataInicial && dataInicial < data2Mese; 

}

export {filtroChuvaHoje, filtroChuvaProximosMeses};