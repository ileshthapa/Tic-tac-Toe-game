let btns = document.querySelectorAll(".buttons_");
let restbtn = document.querySelector("#reset_btn");
let new_game = document.querySelector("#new_game");
let msgcon = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0 =true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];
const disable=()=>{
    for(let btn of btns){
        btn.disabled= true;
    }

}
const enable=()=>{
    for(let btn of btns){
        btn.disabled= false;
        btn.innerText = "";
    }

}



btns.forEach((btns)=>{
    btns.addEventListener("click",()=>{
    if(turn0){
        btns.innerHTML = "0";
        turn0 = false;
    } else{
        btns.innerHTML = "X";
        turn0 =true;
    }
    btns.disabled = true;
    checkWinner();
    });
});
const showWinner = (winner) =>{
    msg.innerText =`Congratulation ,Winner is ${winner}`
    msgcon.classList.remove("hide");
    disable();
   }
   
const checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val = btns[pattern[0]].innerText;
       let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
const resetbtn =()=>{
  turn0=true;
  enable();
  msgcon.classList.add("hide");
};
new_game.addEventListener("click",resetbtn)
restbtn.addEventListener("click",resetbtn)
