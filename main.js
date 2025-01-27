
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

document.getElementById('NCelr').addEventListener('input',function(e) {
    let numero = e.target.value.replace("/\D/g,");

    if(numero.length > 2&& numero.length <=6) {
        numero = `(${numero.substring(0,2)})${numero.substring(2)}`;
    }else if(numero.length>6) {
        numero = `(${numero.substring(0,2)})${numero.substring(2,7)}-${numero.substring(7,11)}`;
    }

    e.target.value=numero;
});

document.getElementById('NCelr').addEventListener('keypass',function(e) {
    const apenasNumeros = /[0-9]/;

    if(!apenasNumeros.test(e.key)) {
    e.preventDefault();
    }

});

document.getElementById('NCelr').addEventListener('keypass',function(e) {
    let valor = e.target.value.replace("/\D/g,");

    if(valor.length>11) {
        valor = valor.substring(0,11);
    }
    e.target.value=valor;
});


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