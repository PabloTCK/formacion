let divMascotas = document.getElementById("mostrable");
let mascotasSi = document.getElementById("mascotas_si");
let mascotasNo = document.getElementById("mascotas_no");
let textoMascotas = document.getElementById("numero");

let mostrar = function() {
    if (mascotasSi.checked)
        divMascotas.classList = "";
    else
        divMascotas.classList = "oculta";
};

let esCero = function() {
    if (parseInt(textoMascotas.value) === 0 || textoMascotas.value === "") {
        alert("Eso es que en realidad no tienes mascotas.");
        textoMascotas.value = "";
        mascotasNo.click();
    }
};


function onClickClickable(numeroID) {
    let div = document.getElementById(`click${numeroID}`)
    div.classList.toggle("clickada");
}