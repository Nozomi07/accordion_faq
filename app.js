const questionList = document.getElementsByClassName("question")

for (let i = 0; i < questionList.length; i++) {
     questionList[i].addEventListener('mouseenter', () => {
        questionList[i].style.color = "orange";
    });
    questionList[i].addEventListener('mouseleave', () => {
        questionList[i].style.color = "hsl(238, 29%, 16%)";
    });
}
  

this.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelectorAll(".accordion_q")
    accordion.forEach((accordion_q) => accordion_q.addEventListener("click", () => {
        if (accordion_q.parentNode.classList.contains("active")) {
            accordion_q.parentNode.classList.toggle("active")
        } else {
            accordion.forEach(accordion_q => accordion_q.parentNode.classList.remove("active"))
            accordion_q.parentNode.classList.add("active")
        }
    }))
});