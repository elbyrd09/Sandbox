// create for loop (10 times) to create cirlces with varying colors

// can I create a variable that stores 3 random values interpolated?
import "./styles.css";

let html;
// creating a variable to later store information in.
const randomValue = () => Math.floor(Math.random() * 256);
// store function for creating a random number
function randomRGB(vakye) {
  const rgbValues = `rgb(${vakye()}, ${vakye()}, ${vakye()})`;
  return rgbValues;
}
//vakye is the parameter being passed in.  since the const is randomValue
// then the parameter being passed in each time is the function itself

for (let i = 1; i <= 10; i++) {
  html += `<div id="multi" 
  style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
  console.log(html);
}

document.querySelector("main").innerHTML = html;
