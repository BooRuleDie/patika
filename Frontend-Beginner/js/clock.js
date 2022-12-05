let username = prompt("Please enter your name: ")

document.getElementById("username").innerHTML = username
clock = document.getElementById("clock")

const updateTime = () => {
  // Get the current time
  let d = new Date();

  // Format the time as a string in the "HH:MM:SS" format
  let time = d.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  clock.innerHTML = time;
}
updateTime()
setInterval(updateTime, 1000);

// Append the time element to the HTML document
document.body.appendChild(timeElement);

