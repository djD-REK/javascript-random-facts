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
