function clock() {
  const fullDate = new Date();
  console.log(fullDate);
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (hours < 10) {
    hour = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minuter").innerHTML = ": " + mins;
  document.getElementById("second").innerHTML = ": " + secs;
}

setInterval(clock, 100);
