import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>allo</h1>
<div>
How are you, homie. Click
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*const main = document.querySelector("main");
let htmlBod = "";
for (let i = 1; i <= 10; i++) {
  htmlBod += `<div class="div-circle">${i}</div>`;
}

main.innerHTML = htmlBod;

const tMinus = 10;
let message = "Liftoff";

for (let i = tMinus; i >= 1; i--) {
  //let status = prompt(`T-minus ${i}... Continue? (Y/N)`);
  if (status === null || status.toLowerCase() === "n") {
    // toLowerCase coverts the N to lower case to check both n entries from user
    message = "Abort launch!";
    break;
  }
}*/
//alert(message);
//placing it outside of the loop means you wait for the program
// to finish the loop and then show the divs in their final form
// once the loop is done.

//---

//const getRandomNumber = (lower, higher = "100") => {
//if (isNaN(lower) || isNaN(higher)) {
//throw Error(`That is definitely whack.  Try again bruh`);
//}
//return Math.floor(Math.random() * (higher - lower + 1) + lower);
//};

//let counter = 0;
//do {
//console.log(`${getRandomNumber(12)} is a number between 12 and 100`);
//counter += 2;
//} while (counter < 5);
//console will print 3 total console.log's since the do ensures that at least 1 console
/// is printed before getting to the while loop (which adds the additional 2)
