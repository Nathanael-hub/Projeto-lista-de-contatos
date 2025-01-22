
const form = document.getElementById('AgendNum');
const Nomes = [];
const Contatos = [];
const Emails = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    maisLinha();
    atualizaTb();
})


function maisLinha() {
    const inputNomes = document.getElementById('NomeC');
    const inputContatos = document.getElementById('NCelr')
    const inputEmails = document.getElementById('E-mail')

    if (Nomes.includes(inputNomes.value)) {
        alert(`Esse nome: ${inputNomes.value} ja foi inserido`);
    } else {
        Nomes.push(inputNomes.value);
        Contatos.push(parseFloat(inputContatos.value));
        Emails.push(inputEmails.value);

        let linha = '<tr>';
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputContatos.value}</td>`;
        linha += `<td>${inputEmails.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomes.value = '';
    inputContatos.value = '';
    inputEmails.value = '';

}
function atualizaTb() {
    const tabelaF = document.querySelector('tbody')
    tabelaF.innerHTML = linhas;
}