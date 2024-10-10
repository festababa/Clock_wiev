function clock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  clockElement.textContent = timeString;
}

setInterval(clock, 1000); 