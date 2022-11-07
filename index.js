const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const h1 = document.querySelector("h1");

function test(event) {
  event.preventDefault(); // 기본이벤트 실행 방지  내할일 추가로 먼저하고 그다음 의 역할
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  h1.innerText = `Hello ${userName}`; //js명령식 ${ ~~ }
  loginForm.classList.add("hidden");
}

if (localStorage.getItem("userName") === null) {
  loginForm.addEventListener("submit", test);
} else {
  loginForm.classList.add("hidden");
  hi.innerText = `Hello ${localStorage.getItem("userName")}`;
}
