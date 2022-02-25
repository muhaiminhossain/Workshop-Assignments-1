//add
let num1= document.getElementById("num1");
let num2= document.getElementById("num2");
let result = document.querySelector("h1");
let button = document.getElementById("btn1").addEventListener('click', ()=> {
 let total = parseFloat(num1.value) + parseFloat(num2.value);
 result.innerText = total;
});


// min to sec
let min= document.getElementById("min");
let seoncds = document.querySelector("h2");
let but = document.getElementById("btn2").addEventListener('click', ()=> {
 let totalsec = parseFloat(min.value) * 60;
 seoncds.innerText = totalsec;
});

