import consumirApi from './componentes/api.js';
import popularSelect from './componentes/formulario.js';
import calcular from './componentes/tabela.js';

var medicamentos = await consumirApi('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos');
var marcas = await consumirApi('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas');

(popularSelect(medicamentos, '#medicamento'));
(popularSelect(marcas, '#marca'));

(document.querySelector('#form').addEventListener('submit', () => {
    event.preventDefault();
    var inputs = {
        medicamentos: document.querySelector('#medicamento').options[document.querySelector('#medicamento').selectedIndex].text,
        administracao: document.querySelector('#administracao').value
    }
    if (calcular(inputs)) {
        document.querySelector(".success").classList.remove("invisible");
        setTimeout(function() {
            document.querySelector(".success").classList.add("invisible")
        }, 5000);
    } else {
        document.querySelector(".alert").classList.remove("invisible");
        setTimeout(function() {
            document.querySelector(".alert").classList.add("invisible")
        }, 5000);
    };
}));