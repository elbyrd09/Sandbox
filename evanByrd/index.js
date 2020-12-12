import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//declaration defines a function using function keyword followed by name of function
// function expression is a annonymous function that is assigned to a variable
//codeMark1();
//function codeMark1() {
//const codeMark = Math.random();
//return codeMark;
//console.log(codeMark);
//};

const getArea = (width, length, unit = "square feet") => {
  const area = width * length;
  return `yo motha fucking result is ${area} ${unit}`;
};

console.log(getArea(22, 22));
//const sayGreeting = (name = 'student') => `Good morning, ${name}!`;

//console.log(sayGreeting());

//Caribou
//sister I promise you I'm changing, you've herad broken promises, I know.
//If you want to change it, you must break it, rip it up and something new will grow
// brother you're the one who must make changes
// no one else can do it if you don't
//surely you must have known things are changing
// I can't do it all on my own

/**
 * Returns a random number between two numbers
 *
 * @param {[number]} low - the lowest number value
 * @param {[number]} high - the highest number value
 * @returns {[number]} - the random number value
 */
const getRandomNumber = (lower, higher = "100") => {
  if (isNaN(lower) || isNaN(higher)) {
    throw Error(`That is definitely whack.  Try again bruh`);
  }
  return Math.floor(Math.random() * (higher - lower + 1) + lower);
};

let counter = 0;
while (counter < 10) {
  console.log(`${getRandomNumber("10")} is a random number between 25 and 100`);
  counter += 1;
}
