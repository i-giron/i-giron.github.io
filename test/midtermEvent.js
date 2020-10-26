let msg1 = document.getElementById('midtermMessage1');
let msg2 = document.getElementById('midtermMessage2');

function myFunction (name){
    msg1.innerHTML = msg2.textContent + (name);
}
button.addEventListener ("click", myFunction("Idis Giron"));