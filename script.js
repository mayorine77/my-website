/* --- script.js --- */
const hints = [
  "【攻略法】焦らずに糸の動きを見ること。",
  "【攻略法】まずはタグの構造を理解しましょう。",
  "【攻略法】CSSの余白はデザインの命です。",
  "【攻略法】JavaScriptはHTMLに命を吹き込みます。"
];
let count = 0;
const card = document.getElementById('featured');
if (card) {
  card.onclick = function() {
    card.innerText = hints[count % hints.length];
    card.style.backgroundColor = "hsl(" + (count * 50) + ", 70%, 90%)";
    count++;
  };
}

const greetBtn = document.getElementById('greet-btn');
const nameInput = document.getElementById('user-name');
const welcomeMsg = document.getElementById('welcome-msg');

if (greetBtn) {
  greetBtn.onclick = function() {
    const name = nameInput.value;
    if (name !== "") {
      localStorage.setItem("userName", name);
      showGreeting(name);
    } else {
      alert("お名前を教えてください！");
    }
  };
}

function showGreeting(name) {
  if (welcomeMsg) {
    welcomeMsg.innerText = name + "さん、一緒にプログラミングを楽しみましょう！";
  }
}

window.onload = function() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    showGreeting(savedName);
  }
};