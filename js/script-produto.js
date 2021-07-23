const produto = document.getElementById('produtos')

produto.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome-produto').value;
    let codigo = document.getElementById('codigo-produto').value;
    let quantidade = document.getElementById('quantidade-produto').value;
    let data = {
        nome,
        codigo,
        quantidade,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('produto', convertData);

    let pronto = alert ('Produto cadastrado com sucesso!'); {
        if (pronto == true)
        return document.getElementById('produtos');
    }

})


