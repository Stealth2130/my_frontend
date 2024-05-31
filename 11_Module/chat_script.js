const wsUrl = "wss://echo-ws-service.herokuapp.com";

const send = document.getElementById("send");
const input = document.getElementById("input");
const geolocation = document.getElementById("geolocation");
const chat = document.getElementById("chat");

let websocket;

function writeToScreenSender(message) {
  chat.innerHTML += `<div class="sender">${message}</div>`;
}

function writeToScreenServer(message) {
  chat.innerHTML += `<div class="server">${message}</div>`;
}

websocket = new WebSocket(wsUrl);
websocket.onmessage = function (evt) {
  writeToScreenServer(`Ответ от сервера: ${evt.data}`);
};
websocket.onerror = function (evt) {
  writeToScreenServer('<span style="color: red;">ERROR:</span> ' + evt.data);
};

send.addEventListener("click", () => {
  const message = input.value;
  if (message !== "") {
    geolocation.style.display = "block";
    writeToScreenSender(message);
    websocket.send(message);
    input.value = ""
  }
});

const error = () => {
  writeToScreenServer("Невозможно получить ваше местоположение");
};

const success = (position) => {
  console.log("position", position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  writeToScreenSender(`<a href="${href}" target="_blank">Геолокация</a>`);
};

geolocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    writeToScreenServer("Geolocation не поддерживается вашим браузером");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});