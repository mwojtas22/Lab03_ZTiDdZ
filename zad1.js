function szyfrowanie_base64(text) {
    return btoa(text);
}

function deszyfr_base64(text) {
    return atob(text);
}

let tekst = prompt("Wpisz tekst ktory chesz szyfrowac: ");
const encodedText = szyfrowanie_base64(tekst);
console.log("Zaszyfrowany: " + encodedText);
const decodedText = deszyfr_base64(encodedText);
console.log("Odszyfrowany: " + decodedText);
console.log("Por�wnanie tekst�w: " + (tekst === decodedText));