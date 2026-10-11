const btnAbrir = document.getElementById('btnAbrir');
const tela1 = document.getElementById('tela1');
const tela2 = document.getElementById('tela2');

btnAbrir.addEventListener('click', () => {
    tela1.classList.remove('ativa');
    tela1.classList.add('oculta');
    
    setTimeout(() => {
        tela2.classList.remove('oculta');
        tela2.classList.add('ativa');
        iniciarChuvaDeCoracoes();
    }, 500);
});

function iniciarChuvaDeCoracoes() {
    for (let i = 0; i < 20; i++) {
        setTimeout(criarCoracao, i * 200);
    }
}

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerHTML = '❤️';
    
    coracao.style.left = Math.random() * 100 + 'vw';
    
    const desvio = (Math.random() - 0.5) * 300 + 'px';
    coracao.style.setProperty('--desvio', desvio);
    
    const duracao = Math.random() * 2 + 3 + 's';
    coracao.style.animationDuration = duracao;
    
    document.body.appendChild(coracao);
    
    setTimeout(() => {
        coracao.remove();
    }, parseFloat(duracao) * 1000);
}