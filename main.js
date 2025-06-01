
function enterPortal() {
  document.getElementById("chatbox").style.display = "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;

  const log = document.getElementById("chatlog");
  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.innerHTML = "<b>Ты:</b> " + text;
  log.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot";
  const responses = [
    "Хороший вопрос. А что за этим стоит?",
    "Ты ведь уже знал ответ. Просто нужно было услышать его снова.",
    "Иногда тишина — тоже шаг. Продолжай.",
    "Хочешь — разберём вместе. Я рядом.",
    "Не торопись. Все ответы ближе, чем кажется."
  ];
  const reply = responses[Math.floor(Math.random() * responses.length)];
  botMsg.innerHTML = "<b>Проводник:</b> " + reply;
  log.appendChild(botMsg);

  input.value = "";
  log.scrollTop = log.scrollHeight;
}
