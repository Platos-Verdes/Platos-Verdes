 const loginForm = document.getElementById("login-form");
 const registroForm = document.getElementById("registro-form");
 const registroBtn = document.getElementById("registro-btn");
 const loginBtn = document.getElementById("login-btn");

 registroBtn.addEventListener("click", () => {
   loginForm.style.display = "none";
   registroForm.style.display = "block";
   registroForm.classList.add("rotate-center");
 });

 loginBtn.addEventListener("click", () => {
   registroForm.style.display = "none";
   loginForm.style.display = "block";
   loginForm.classList.add("rotate-center");
 });