 const pick = ["Red", "Blue", "White", "green", "black", " brown" ];

 const btn = document.getElementById("btn");

 const color = document.querySelector(".color");

 btn.addEventListener("click", () => {
    let getRandomNamber = random();    
    color.textContent= pick[getRandomNamber];
    document.body.style.background = pick[getRandomNamber];
 });

 function random(){
    return Math.floor(Math.random() * pick.length);
 }