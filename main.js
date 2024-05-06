// Função para buscar e popular a lista de animais
async function popularLista() {
    const response = await fetch('https://663809ae4253a866a24ca8a4.mockapi.io/animal/animais');
    const data = await response.json();

    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';

    data.forEach(animal => {
        const listItem = document.createElement('li');
        listItem.textContent = `${animal.id} - ${animal.name} - ${animal.idade} anos - ${animal.raca}  |`;
        animalList.appendChild(listItem);
    });
    
}

// Função para cadastrar um animal
async function cadastrarAnimal() {
    const novoAnimal = {
        name: 'Belinha',
        idade: 15,
        raca: 'cadela'
    };

    const response = await fetch('https://663809ae4253a866a24ca8a4.mockapi.io/animal/animais', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoAnimal)
    });

    if (response.ok) {
        alert('Animal cadastrado com sucesso!');
        popularLista(); // Atualiza a lista após o cadastro
    } else {
        alert('Erro ao cadastrar o animal.');
    }
}


// Popular a lista de animais ao carregar a página
window.onload = function() {
    popularLista();
};