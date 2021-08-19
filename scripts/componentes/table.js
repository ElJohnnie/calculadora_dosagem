function calcular(inputs) {

    return criarTr(inputs);

}

function criarTr(inputs) {
    var resultadoTr = document.createElement("tr");
    resultadoTr.classList.add("t-line");

    var acoes = document.createElement("div");
    acoes.classList.add("btn-group");
    var acoesbtns = acoes.innerHTML = `<button class="btn-sm btn-danger">Cancelar</button>
    <button class="btn-sm btn-success">Aplicar</button>`;


    resultadoTr.appendChild(criarTd(inputs.medicamento));
    resultadoTr.appendChild(criarTd("Teste"));
    resultadoTr.appendChild(criarTd("Teste"));
    resultadoTr.appendChild(criarTd(inputs.administracao));
    resultadoTr.appendChild(criarTd("60 minutos"));
    resultadoTr.appendChild(criarTd("Descartar"));
    resultadoTr.appendChild(criarTd("Teste"));

    return resultadoTr;

}

function criarTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

export default calcular;