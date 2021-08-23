import consumirApi from './componentes/api.js';
import popularSelect from './componentes/form.js';
import calcular from './componentes/table.js';

let medicamentos = await consumirApi('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos');
let marcas = await consumirApi('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas');

popularSelect(medicamentos, '#medicamento');
popularSelect(marcas, '#marca');

document.querySelector('#form').addEventListener('submit', () => {
    event.preventDefault();
    var medicamento = document.querySelector('#medicamento');
    var inputs = {
        medicamentos: medicamento.options[medicamento.selectedIndex].text,
        administracao: document.querySelector('#administracao').value
    }
    calcular(inputs);
})