

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(e) {
const name= prompt("what is your name?");
const age= prompt("How old are you?");

document.body.innerHTML = "<h1>Hey " + name + ", How are you today. Do you like being " + age +" years old?</h1>";
});

 