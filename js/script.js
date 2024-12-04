console.log("Javascript is linked and working");
const footer = document.getElementById("footer");
const currentYear= new Date().getFullYear();
const fulldate = new Date().toDateString();
footer.innerHTML = `&copy; Brent Carl Arabos, ${currentYear}`;
console.log("Today's full date is:", fulldate);
const hours = new Date().getHours();
const greetingElement = document. getElementById("greeting");
let greeting = "";
let greetingClass = "";
if (hours < 12) {
    greeting = "Good morning!";
    greetingClass = "morning";
} else if (hours < 17) {
    greeting = "Good afternoon!";
    greetingClass = "afternoon";
} else {
    greeting = "Good evening!";
    greetingClass = "evening";
}
greetingElement.textContent = greeting;
greetingElement.className = greetingClass;
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function () {
    alert("Hello World!");
});

alertButton.onmouseover = function () {
    alertButton.textContent = "You're hovering!";
};

alertButton.onmouseout = function (){
    alertButton.textContent = "Click Me";
};

const numbersList = document.getElementById("numbers");

for(let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? `Even: ${i}` : `Odd: ${i}`;
    numbersList.appendChild(listItem);
}