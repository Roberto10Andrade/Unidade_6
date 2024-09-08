const formulario = document.getElementById('formulario');
const erroDiv = document.getElementById('erro');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const fone = document.getElementById('fone').value.trim();

    if (nome.length < 5 || nome.length > 40) {
        erroDiv.innerHTML = 'Erro! O nome deve ter entre 5 e 40 caracteres.';
        erroDiv.classList.add('error'); 
        return;
    }

    if (!email.includes('@')) {
        erroDiv.innerHTML = 'Erro! O e-mail deve ter um @.';
        erroDiv.classList.add('error'); 
        return;
    }

    if (fone.length !== 13) {
        erroDiv.innerHTML = 'Erro! O fone deve ter 15 caracteres (DDD + número).';
        erroDiv.classList.add('error'); 
        return;
    }

    formulario.submit();
});