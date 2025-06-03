
function enterPortal() {
  document.getElementById("chatbox").style.display = "block";
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  const log = document.getElementById("chatlog");
  log.innerHTML += `<div class="user"><b>Ты:</b> ${text}</div>`;
  input.value = "";

  try {
    const response = await fetch("https://zero-one-core.onrender.com/api/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: text })
    });

    const data = await response.json();
    const reply = data.reply || "…";
    log.innerHTML += `<div class="bot"><b>Проводник:</b> ${reply}</div>`;
  } catch (err) {
    log.innerHTML += `<div class="bot"><b>Проводник:</b> Сейчас не могу говорить — ошибка соединения.</div>`;
  }

  log.scrollTop = log.scrollHeight;
}
