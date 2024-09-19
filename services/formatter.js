function addZeroLeft(data) {
    return String(data).length > 1 ? data : `0${data}`;
}

function formatterData(data, format) {
    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    let formatted = '';

    switch (format) {
        case 'MM/DD':
            formatted = `${addZeroLeft(month)}/${addZeroLeft(day)}`
            break;
        case 'YYYY/MM/DD':
            formatted = `${addZeroLeft(year)}/${addZeroLeft(month)}/${addZeroLeft(day)}`
            break;
    }

    return formatted;
}

export default formatterData;

// const data = new Date();
// console.log(formatterData(data, 'YYYY/MM/DD'))