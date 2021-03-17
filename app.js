var Q = document.getElementsByClassName("question_title")
for (let i = 0; i < Q.length; i++) {
    Q[i].addEventListener('mouseenter', () => {
        Q[i].style.color = "orange";
    });
}
var Q = document.getElementsByClassName("question_title")
for (let i = 0; i < Q.length; i++) {
    Q[i].addEventListener('mouseleave', () => {
        Q[i].style.color = "hsl(238, 29%, 16%)";
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