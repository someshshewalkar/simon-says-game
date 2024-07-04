let gameseq=[];
let userseq=[];
let btns=['red','green','purple','orange'];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){

        started=true;
        levelUp();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300 );
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300 );
}



function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    //random btn
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randBtn);
}

function checkAns(idx){
    // let idx = level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML=`Game over ! your score was <b>${level}</b> <br> press any key to start.`;
        reset(); // calling reset fun for restrat the game
    }

}

function btnPress(){
    // console.log("button pressed");
    let btn=this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    //checking last index of user seq 
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
} 

//function for restart game 
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}