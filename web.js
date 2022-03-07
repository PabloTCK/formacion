const divMascotas = document.getElementById("mostrable");
const mascotasSi = document.getElementById("mascotas_si");
const mascotasNo = document.getElementById("mascotas_no");
const textoMascotas = document.getElementById("numero");

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

const texto = document.getElementsByClassName("textoTransform")[0];

function onClickClickable(numeroID) {
    let div = document.getElementById(`click${numeroID}`)
    div.classList.toggle("clickada");
    if (texto.value !== "") {
        div.style.transform = `"${texto.value};"`;
        // div.style.transform = "scale(0.5)";
    }
    if (!div.classList.contains("clickada")) {
        div.style = "";
    }
}