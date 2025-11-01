'use strict';

// מספר אקראי בין 1 ל-20
let Num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

// פונקציה לעדכון הודעה
const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

// מאזין לכפתור "check"
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('לא הכנסת מספר');
  } else if (guess === Num) {
    setMessage('צדקת!!💕😶‍🌫️');
    document.querySelector('body').style.backgroundColor = '#006400';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.win-image').classList.remove('hidden');
    document.querySelector('.number').textContent = Num;

    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }

  } else if (guess !== Num) {
    // כל הבדיקה של ניחוש גבוה/נמוך בתוך התנאי הזה
    if (score > 1) {
      setMessage(guess > Num ? `${guess} גדול מהמספר` : `${guess} קטן מהמספר`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('הפסדת 😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }
  }
});

// מאזין לכפתור "again" – מחוץ לאירוע "check"
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  score = 20;
  Num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';
  setMessage('יאללה שוב');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.win-image').classList.add('hidden');
});
