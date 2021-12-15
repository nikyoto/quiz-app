const btnAnswer = document.querySelectorAll(".btn-answer");
const answer = document.querySelectorAll(".answer");

const btnSelected = "button-answer--clicked";
const answerShowing = "answer--showing";

btnAnswer.forEach((btnAnswer, index) => {
	btnAnswer.addEventListener("click", ev => {
		answer[index].classList.toggle(answerShowing);
		if (answer[index].classList.contains(answerShowing)) {
			btnAnswer.innerHTML = "Hide Answer";
		} else {
			btnAnswer.innerHTML = "Show Answer";
		}
	})
});