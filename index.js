/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {

const hour = parseInt(timeStr, 10);
  if (hour < 12) return "Good Morning";
  if (hour > 12 && hour < 17) return "Good Afternoon";
  if (hour > 17 ) return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;

}
