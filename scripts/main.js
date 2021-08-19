import valoresInput from './componentes/form.js'
import calcular from './componentes/table.js'

(form.addEventListener('submit', (event) => {
    event.preventDefault();
    var table = document.querySelector('#resultado');
    var returned = calcular(valoresInput());
    table.appendChild(returned);
}));

(document.getElementById("ml").addEventListener("change", function() {
    this.value = parseFloat(this.value).toFixed(2);
}));