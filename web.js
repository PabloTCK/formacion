let div = document.getElementById("mostrable");
let toggle = document.getElementById("mascotas_si");

let mostrar = function() {
    if (toggle.checked)
        div.classList = "";
    else
        div.classList = "oculta";
};