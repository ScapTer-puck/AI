// script.js
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  // Показуємо повідомлення користувача
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // Відповідь "бота"
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";

  // Простий ШІ: реагує на кілька слів
  const userText = input.value.toLowerCase();
  if (userText.includes("привіт")) {
    botMsg.textContent = "Привіт! Як справи?";
  } else if (userText.includes("погода")) {
    botMsg.textContent = "Я не знаю точно, але здається, сьогодні гарна погода ☀️";
  } else if (userText.includes("як справи")) {
    botMsg.textContent = "У мене все добре! Дякую, що питаєш.";
  } else {
    botMsg.textContent = "Цікаво... Розкажи більше!";
  }

  chatBox.appendChild(botMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
