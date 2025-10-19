'use strict';
/*console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent='correct number!💕😶‍🌫️'
document.querySelector('.score').textContent=7*45
document.querySelector('.number').textContent=90
console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value=14
*/


const Num= Math.trunc(Math.random()*20)+1;
let score=20

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    document.querySelector('.message').textContent =
      'לא הכנסת מספר ואמא שלך זונה',typeof guess,typeof Num
  } else if (guess=== Num)
                  { document.querySelector('.message').textContent='correct number!💕😶‍🌫️';
                  (document.querySelector('.score').textContent =20);
                  document.querySelector('body').style.backgroundColor='#006400';
                  document.querySelector('.number').style.width='30rem';
                  document.querySelector('.number').textContent=Num 
                    }
    else if (guess>Num) 
      { if(score>0){document.querySelector('.message').textContent=`${guess} is greater than ${Num}`
        score--;
        document.querySelector('.score').textContent = score;}
      else {document.querySelector('.message').textContent=`you lost`}
      }

    else if (guess<Num)
   { if(score>0){document.querySelector('.message').textContent=`${guess} is greater than ${Num}`
        score--;
        document.querySelector('.score').textContent = score;}
      else {document.querySelector('.message').textContent=`you lost`}
      }
});
