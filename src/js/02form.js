function textCounter() {
    let textNumber= text.value.length;
    console.log(textNumber);
    counter.innerHtml=textNumber
}
/*
contabilizar la longitud del string que se forma en el el textarea sería el value.length
sustituir el texto incluido el el span mediante innerhtml
llamar a la función poniendo el listener en el textarea y usando el evento Keyup
*/