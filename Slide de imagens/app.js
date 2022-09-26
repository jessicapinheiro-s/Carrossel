
let images = document.querySelectorAll('.slides .imgs img');
let allImages = images.length;
let firstImg = document.getElementById('primeiraImg');


document.getElementById('bt-voltar').addEventListener('click', function () {
    for (let i = 0; i < allImages; i++) {
        if(firstImg){
            alert('nao');
        }else{
            images[i].classList.add('toRight');
        }
        
    }
})


document.getElementById('bt-prox').addEventListener('click', function () {
    for (let i = 0; i < allImages; i++) {
        images[i].classList.add('toLeft');
    }
})


