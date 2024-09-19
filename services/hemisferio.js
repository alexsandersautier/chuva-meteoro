function obterHemisferio(declinacao){
    return declinacao > 0 ? 'Norte' : 'Sul';
}

export default obterHemisferio;