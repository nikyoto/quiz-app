const btnAnswer = document.querySelectorAll(".btn-answer");
const answer = document.querySelectorAll(".answer");
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


function save (id, state) {
	window.localStorage.setItem(id, state);
}

const cards = document.querySelectorAll(".question-card");

cards.forEach(card => {
	const bookmark = card.querySelector(".bookmark");
	const checkbox = bookmark.querySelector("input[type=checkbox]");
	const id = checkbox.id;
	const wasChecked = window.localStorage.getItem(id) === "true";
	checkbox.checked = wasChecked;

	checkbox.addEventListener("change", (event_) => {
		const isChecked =  event_.target.checked;
		save(id, isChecked)
	})

})
