const divParagrafos = document.querySelector('.paragrafos');
const pParagrafos = document.querySelectorAll('p');
const capturarStyle = getComputedStyle(document.body);
const capturarCor = capturarStyle.backgroundColor;

for (let p of pParagrafos){
    p.style.backgroundColor = capturarCor;
    p.style.color = 'white';
}