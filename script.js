const btn = document.getElementById("generate")
let pas1 = document.getElementById("ps1")
let pas2  = document.getElementById("ps2")
let chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?'
  ];

function getRandomIndex(){
    return Math.floor(Math.random() * chars.length)
}

btn.addEventListener("click",function(){
    let password = ""
    let password2 = ""
    for(let i = 0; i < 10; i++){
        password += chars[getRandomIndex()]
    }
    pas1.textContent = password
    for(let i = 0; i < 10; i++){
        password2 += chars[getRandomIndex()]
    }
    pas2.textContent = password2
})