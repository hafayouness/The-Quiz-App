const responses = ["a", "b", "c", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const results = [];

  const radioButtons = document.querySelectorAll(
    "input[type ='radio']:checked"
  );
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  // console.log(radioButtons);
  // console.log(results);
  shoowResults(results);
  addColors(results);
}
const titleResults = document.querySelector(".result h2");
const markReslts = document.querySelector(".mark");
const helpResults = document.querySelector(".help");
function shoowResults(results) {
  const errorsNumber = results.filter((el) => el === false).length;
  // console.log(errorsNumber);
  switch (errorsNumber) {
    case 0:
      titleResults.textContent = "Bravo,c'est un sans faute ✔️";
      helpResults.style.display = "block";
      helpResults.textContent = "Quelle culture ....";
      markReslts.style.display = "block";
      markReslts.innerHTML = " score : <span> 4/4</span>";
      break;
    case 1:
      titleResults.textContent = "👀 il reste quellque erreurs.😕";
      helpResults.style.display = "block";
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis revalidez!";
      markReslts.style.display = "block";
      markReslts.innerHTML = " score : <span> 3/4</span>";
      break;
    case 2:
      titleResults.textContent = "👀 il reste quellque erreurs.😕";
      helpResults.style.display = "block";
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis revalidez!";
      markReslts.style.display = "block";
      markReslts.innerHTML = " score : <span> 2/4</span>";
      break;
    case 3:
      titleResults.textContent = "😒 peut mieux faire .😕";
      helpResults.style.display = "block";
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis revalidez!";
      markReslts.style.display = "block";
      markReslts.innerHTML = " score : <span> 1/4</span>";
      break;
    case 4:
      titleResults.textContent = "👎 peut mieux faire.👎";
      helpResults.style.display = "block";
      helpResults.textContent =
        "Retentez une autre réponse dans les cases rouges, puis revalidez!";
      markReslts.style.display = "block";
      markReslts.innerHTML = " score : <span> 0/4</span>";
      break;
    default:
      titleResults.textContent = "woops,cas inatendu";
  }
}

const question = document.querySelectorAll(".question-block");
function addColors(results) {
  results.forEach((res, index) => {
    if (results[index]) {
      question[index].style.backgroundImage =
        "linear-gradient(to right,#a8ff78,#78ffd6)";
    } else {
      question[index].style.backgroundImage =
        "linear-gradient(to right,#f5567b,#fd674c)";
    }
  });
}

const radioInputs = document.querySelectorAll("input[type='radio']");
radioInputs.forEach((radioInput) =>
  radioInput.addEventListener("input", resetColors)
);
function resetColors(e) {
  // console.log(e.target.getAttribute("name").slice(1)); SLICE C'EST DE  PRENDS QUE LE NUMERO
  const index = e.target.getAttribute("name").slice(1) - 1;
  const parentQuestionBlock = question[index];

  parentQuestionBlock.style.backgroundImage = "#f1f1f1";
  parentQuestionBlock.style.backgroundImage = "none";
}
