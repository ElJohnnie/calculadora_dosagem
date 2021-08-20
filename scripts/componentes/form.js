 function getMedicamentos() {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos");
     xhr.addEventListener("load", () => {
         if (xhr.status == 200) {
             var resposta = xhr.responseText;
             var medicamentos = JSON.parse(resposta);
             medicamentos.forEach((medicamento) => {
                 selectMedicamentos(medicamento);
             });
         } else {
             console.log("houve um erro");
         }
     });
     xhr.send();
 };

 function getMarcas() {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas");
     xhr.addEventListener("load", () => {
         if (xhr.status == 200) {
             var resposta = xhr.responseText;
             var marcas = JSON.parse(resposta);
             console.log(medicamentos);
             marcas.forEach(function(marcas) {
                 selectMedicamentos(medicamento);
             });
         } else {
             console.log("houve um erro");
         }
     });
     xhr.send();
 };

 function selectMedicamentos(medicamento) {
     var select = document.querySelector('#medicamento');
     var option = document.createElement("option");
     option.value = medicamento.id;
     option.text = medicamento.name;
     select.appendChild(option);
 };


 export default getMedicamentos;