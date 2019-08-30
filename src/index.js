import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Question 1
var myFunction = function myFunction() {
  console.log(myFunction === myFunction);
};
myFunction();

const functionTwo = () => {
  console.log(functionTwo === functionTwo);
};
functionTwo();
// Results: true true

// Question 2
function returnAnObject() {
  return;
  {
    test: 1;
  }
}
console.log(returnAnObject());

function returnAnotherObject() {
  return { test: 1 };
}
console.log(returnAnotherObject());

const returnAnObjectArrow = () => {
  test: 1;
};
console.log(returnAnObjectArrow());

const returnAnotherObjectArrow = () => {
  return { test: 1 };
};
console.log(returnAnotherObjectArrow());
// Results: undefined, Object {test: 1}, undefined, Object {test: 1}

// Question 3
console.log(Number("7") - 7 == 0);
console.log(Number("7") - 7 === 0);
console.log(Number("7") - 7 === Number("0"));
console.log("7" - 7 == "0");
console.log("7" - 7 === "0");
// Results: true, true, true, true, false

console.log("Question 4");

// All permutations of falsy comparisons in JavaScript by Dr. Derek Austin 🥳
console.log(false == false); // true
console.log(false === false); // true
console.log(false == 0); // true -- false, 0, and "" are loosely equal
console.log(false === 0); // false
console.log(false == ""); // true -- false, 0, and "" are loosely equal
console.log(false === ""); // false
console.log(false == null); // false
console.log(false === null); // false
console.log(false == undefined); // false
console.log(false === undefined); // false
console.log(false == NaN); // false
console.log(false === NaN); // false
console.log(0 == 0); // true
console.log(0 === 0); // true
console.log(0 == ""); // true -- false, 0, and "" are loosely equal
console.log(0 === ""); // false
console.log(0 == null); // false
console.log(0 === null); // false
console.log(0 == undefined); // false
console.log(0 === undefined); // false
console.log(0 == NaN); // false
console.log(0 === NaN); // false
console.log("" == ""); // true
console.log("" === ""); // true
console.log("" == null); // false
console.log("" === null); // false
console.log("" == undefined); // false
console.log("" === undefined); // false
console.log("" == NaN); // false
console.log("" === NaN); // false
console.log(null == null); // true
console.log(null === null); // true
console.log(null == undefined); // true -- null loosely equals undefined
console.log(null === undefined); // false
console.log(null == NaN); // false
console.log(null === NaN); // false
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true
console.log(undefined == NaN); // false
console.log(undefined === NaN); // false
console.log(NaN == NaN); // false -- NaN nothing equals NaN, and
console.log(NaN === NaN); // false -- NaN doesn't equal itself
