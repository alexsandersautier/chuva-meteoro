function addZeroLeft(data){
    console.log(data)
    return data.length > 1 ? data : `0${data}`;
}

function formatterData(data, format){
    const day = data.getDay();
    const month = data.getMonth();
    const year = data.getFullYear();
    
    let formatted = '';
    
    switch(format){
        case 'MM/DD':
            formatted = `${addZeroLeft(month)}/${addZeroLeft(day)}`
            break;
        case 'YYYY/MM/DD':
            formatted = `${addZeroLeft(year)}/${addZeroLeft(month)}/${addZeroLeft(day)}`
            break;
    }

    return formatted;
}

const data = new Date();
console.log(formatterData(data, 'YYYY/MM/DD'))