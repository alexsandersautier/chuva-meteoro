import tipoChuva from "../helpers/tipoChuva.js";
import obterHemisferio from "./hemisferio.js";

function imprimirChuva(chuvas, tipo) {
    console.log('');

    switch (tipo) {
        case tipoChuva.hoje:
            if (chuvas.length > 0) {
                console.log("Chuvas de meteoros hoje.");
                console.log("NOME DA CHUVA               - INTENSIDADE          - HEMISFÉRIO  - PERÍODO")
            } else {
                console.log('Nenhuma chuva pode ser vista hoje');
            }
            break;
        case tipoChuva.Meses:
            if (chuvas.length > 0) {
                console.log("Chuvas de meteoros nos próximos dois meses.");
                console.log('');

                console.log("NOME DA CHUVA               - INTENSIDADE          - HEMISFÉRIO  - PERÍODO")
            } else {
                console.log('Nenhuma chuva pode ser vista nos próximos 2 meses');
            }
            break;
    }


    chuvas.forEach(chuva => {
        let nome = chuva.nome;
        let intensidade = chuva.thz + ' ' + '('+chuva.intensidade.split(' ')[0]+')';
        let hemisferio = obterHemisferio(chuva.declinacao);

        if (nome.length < 27) {
            const diferenca = 27 - nome.length;
            nome += (' ').repeat(diferenca)
        }

        if (chuva.thz.length + intensidade.length < 20) {
            const diferenca = 20 - intensidade.length;
            intensidade += (' ').repeat(diferenca);
        }

        if (hemisferio.length < 11) {
            const diferenca = 11 - hemisferio.length;
            hemisferio += (' ').repeat(diferenca)
        }

        console.log(`${nome} - ${intensidade} - ${hemisferio} - ${chuva.inicio} à ${chuva.fim}`)
    })
}

export default imprimirChuva;