export default async function consumirApi(url) {
    var resposta = await fetch(url);
    var data = await resposta.json();
    return data;
}