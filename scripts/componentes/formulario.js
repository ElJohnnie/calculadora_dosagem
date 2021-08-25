export default function popularSelect(elementos, selectId) {
    var select = document.querySelector(selectId);
    elementos.map(function popularSelect(params) {
        var option = document.createElement("option");
        option.value = params.id;
        option.text = params.name;
        select.appendChild(option);
    });
}