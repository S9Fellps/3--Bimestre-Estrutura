const participantes = [];
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (nome && cpf) {
        participantes.push({ nome, cpf });
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        alert('Participante registrado com sucesso');
    } else {
        alert('Preencha todos os campos');
    }
});

document.getElementById('mostrarLista').addEventListener('click', function () {
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${participante.nome}, CPF: ${participante.cpf}`;
        lista.appendChild(li);
    });
}); 