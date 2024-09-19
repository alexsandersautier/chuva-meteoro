import tipoChuva from "../helpers/tipoChuva";

function imprimir(chuvas, tipo) {

    switch(tipo){
        case tipoChuva.hoje:
            if (chuvas.length > 0) {
                console.log("Chuvas que podem ser vistas hoje")
                console.log("Nome da chuva - Intensidade - Hemisfério - Período")
                chuvasHoje.forEach(chuva => console.log(`${chuva.nome} - ${chuva.intensidade}`))
            }
            break;
        case tipoChuva.Meses:
            break;
    } 
}

export default imprimir;