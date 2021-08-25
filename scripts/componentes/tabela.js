export default function calcular(inputs) {
    document.querySelector('#form').reset();
    return criarTr(inputs);
}

function criarTr(inputs) {
    var table = document.querySelector('#resultado');
    var resultadoTr = document.createElement("tr");
    resultadoTr.classList.add("t-line");
    resultadoTr.appendChild(criarTd(inputs.medicamentos));
    resultadoTr.appendChild(criarTd("Teste"));
    resultadoTr.appendChild(criarTd("Teste"));
    resultadoTr.appendChild(criarTd(inputs.administracao));
    resultadoTr.appendChild(criarTd("60 minutos"));
    resultadoTr.appendChild(criarTd("Descartar"));
    resultadoTr.appendChild(criarTdBotoes());
    return table.appendChild(resultadoTr);
}

function criarTd(dado) {
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

function criarTdBotoes() {
    var acoes = document.createElement("div");
    acoes.classList.add("btn-group");
    acoes.innerHTML = `<button class="btn-sm btn-danger">Cancelar</button>
    <button class="btn-sm btn-success">Aplicar</button>`;
    return acoes;
}