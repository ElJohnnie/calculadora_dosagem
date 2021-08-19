function valoresInput() {
    var valores = {
        medicamento: document.querySelector("#medicamento").value,
        marca: document.querySelector("#marca").value,
        dosagem: document.querySelector("#dosagem").value,
        administracao: document.querySelector("#administracao").value,
        ml: document.querySelector("#ml").value
    }

    return valores;
};

document.getElementById("ml").addEventListener("change", function() {
    this.value = parseFloat(this.value).toFixed(2);
});

export default valoresInput;