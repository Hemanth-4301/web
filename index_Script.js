let modeBtn=document.querySelector(".mode");
let body=document.querySelector("body");
let currentMode="light";

modeBtn.addEventListener('click',()=>{
    if(currentMode=="light"){
        currentMode="dark";
        body.style.background="rgba(0,0,0.5,0.8)";
    }
    else{
        currentMode="light";
        body.style.background="linear-gradient(90deg,lightgray,skyblue)";

    }
})
