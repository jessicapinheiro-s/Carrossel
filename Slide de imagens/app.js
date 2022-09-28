let atual = 0;
let images = document.querySelectorAll('.slides .imgs');
let firstImg = document.getElementById('primeiraImg');

function atbfuncaoASDivs() {
    //percorre todas as imgs
    for (let i = 0; i < images.length; i++) {
        let balls = document.querySelector('.balls');
        //cria uma bolinha pra cada img
        let div = document.createElement('div');
        //cada bolinha recebe um id correspondente ao indice da img no vetor
        div.id = i;
        balls.appendChild(div);
    }

    document.getElementById('0').classList.add('imgAtual');

    let pos = document.querySelectorAll('.balls div');


    for (let i = 0; i < pos.length; i++) {
        pos[i].addEventListener('click', () => {
            atual = pos[i].id;
            slide();
        })
    }
}
atbfuncaoASDivs();

document.getElementById('bt-voltar').addEventListener('click', function () {
    atual--;
    slide();
})

document.getElementById('bt-prox').addEventListener('click', function () {
    atual++;
    slide();
})

function slide() {
    if (atual >= images.length) {
        atual = 0;
    } else if (atual < 0) {
        atual = images.length - 1;
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual');
    //define o tamanho da marginLeft de acordo com o tamanho da tela
    
    if (window.matchMedia("(min-width:1600px)").matches) {
        firstImg.style.marginLeft = -1100 * atual + 'px';
    } else if (window.matchMedia("(min-width:1360px)").matches) {
        firstImg.style.marginLeft = -1000 * atual + 'px';
    } else if (window.matchMedia("(max-width:425px)").matches) {
        firstImg.style.marginLeft = -425 * atual + 'px';
    }

    document.getElementById('primeiraImg').classList.add('.imgAtual');
}
slide();

