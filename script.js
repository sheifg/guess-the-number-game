const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

const randomValue = document.getElementById("random-number");

let totalAttemps = 5;
const totalAtt = document.getElementById("attemps");
totalAtt.textContent = totalAttemps;

const button = document.getElementById("btn-guess");

const btnReload = document.getElementById("btn-reload");
btnReload.style.display = "none";
// To reload/refresh the page clicking the button reload
btnReload.onclick = function () {
  location.reload(true);
};

button.addEventListener("click", () => {
  const userNumber = document.getElementById("guess-number");
  const userNumberValue = userNumber.value;
  const result = document.getElementById("result");
  const rangeMax = document.getElementById("range-max");
  const rangeMin = document.getElementById("range-min");
  if (userNumberValue === "") {
    alert("Please enter a value");
  }
  if (totalAttemps > 0) {
    if (userNumberValue > 1 && userNumberValue < 101) {
      if (userNumberValue < randomNumber) {
        result.textContent = "Go higher!";
        console.log(userNumber);
        userNumber.value = "";
        rangeMin.textContent = userNumberValue;
      } else if (userNumberValue > randomNumber) {
        result.textContent = "Go lower!";
        userNumber.value = "";
        rangeMax.textContent = userNumberValue;
      } else {
        result.textContent = "You are the winner!";
      }

      totalAttemps--;
      totalAtt.textContent = totalAttemps;
      if (totalAttemps === 0) {
        randomValue.textContent = `The number was ${randomNumber}.`;
        btnReload.style.display = "block";
        result.textContent = "Game over!";
      }
    } else {
      alert("Please enter a number between 1 and 100");
    }
  }
});
