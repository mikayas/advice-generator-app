const url = 'https://api.adviceslip.com/advice';
const btnAdivce = document.getElementById('roll-advice');
const idAdvice = document.getElementById('id-advice');
const textAdvice = document.getElementById('text-advice');

function getAdviceslip(elemenIdAdvice, elementTextAdvice) {
   fetch(url).then(response => {
      response.json().then(data => {
         elemenIdAdvice.innerHTML = `ADVICE #${data.slip.id}`;
         elementTextAdvice.innerHTML = `"${data.slip.advice}"`;
      })
   })  
}

getAdviceslip(idAdvice, textAdvice);

btnAdivce.addEventListener('click', () => {
   getAdviceslip(idAdvice, textAdvice);
})
