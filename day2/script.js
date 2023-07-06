const menu = document.querySelector(".menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

action=true;


menu.addEventListener("click",()=>{
    if(action){
        line1.classList.add("top");
        line2.classList.add("center");
        line3.classList.add("bottom");
        action=false;
    } else {
        line1.classList.remove("top");
        line2.classList.remove("center");
        line3.classList.remove("bottom");
        action=true;
    }
    
})