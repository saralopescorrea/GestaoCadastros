const cliente = document.getElementById('clientes')

cliente.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome-cliente').value;
    let cpf = document.getElementById('cpf-cliente').value;
    let email = document.getElementById('email-cliente').value;
    let telefone = document.getElementById('telefone-cliente').value;
    let endereço = document.getElementById('endereço-cliente').value;
    let dados = {
        nome,
        cpf,
        email,
        telefone,
        endereço,
    }

    let convertDados = JSON.stringify(dados);

    localStorage.setItem('cliente', convertDados);

    let pronto = alert ('Cliente cadastrado com sucesso!'); {
        if (pronto == true)
        return document.getElementById('clientes');
    }
})