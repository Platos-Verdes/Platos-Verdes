const stars = document.querySelectorAll(".star");
const result = document.getElementById("rating-value");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    result.textContent = value;
    stars.forEach((s) => s.classList.remove("active"));
    for (let i = 0; i < value; i++) {
      stars[i].classList.add("active");
    }
  });
});
