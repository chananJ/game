  'use strict';
 


  
  let Num = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let high_score = 0; 

    document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'לא הכנסת מספר';
    } else if (guess === Num) {
      document.querySelector('.message').textContent = 'צדקת!!💕😶‍🌫️';
      document.querySelector('body').style.backgroundColor = '#006400';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.win-image').classList.remove('hidden');
      document.querySelector('.number').textContent = Num;
      if (score >high_score){
        high_score=score;
        document.querySelector('.highscore').textContent=high_score;
      }

    } else if (guess > Num) {
      if (score > 0) {
        document.querySelector('.message').textContent = `${guess} is greater than ${Num}`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'you lost';
      }
    } else if (guess < Num) {
      if (score > 0) {
        document.querySelector('.message').textContent = `${guess} is smaller than ${Num}`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'you lost';
      }
    }
  });
  const againBtn = document.querySelector('.again');
  console.log('again button:', againBtn);

  againBtn.addEventListener('click', function() {
document.querySelector('.message').textContent = 'יאללה שוב';
score = 20;
Num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = "?";
document.querySelector('.guess').value = '';
document.querySelector('.win-image').classList.add('hidden');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

