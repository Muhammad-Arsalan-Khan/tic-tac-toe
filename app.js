let boxes=document.querySelectorAll(".box");
console.log(boxes);
let rest=document.querySelector("#reset-button");
let msg = document.querySelector(".msg");
let msgContainar = document.querySelector(".msgContainar");
let NewButton = document.querySelector("#New-button");

let turn=true; //palyer X and palyer 0
let count=0;

const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="0"
            turn=false;
            box.style.color="white"
        }
        else{
            box.innerText="X"
            turn=true;
            box.style.color="black"
        }
        box.disabled=true;
        count++;
        // console.log(count);
        let isWinner=checkwiner(); //function
        if (count === 9 && !isWinner)
        gamedraw();
    });
});
const gamedraw=()=>{
    msg.innerText="The Match Was Draw";
}
const disabledBoxes=()=>{ //function process  //winer ky jitny ky bad game rokny ka process
    for(let box of boxes){ //for of loop
        box.disabled=true;
    }
}
const enabledBoxes=()=>{ //function process  //game rest ya dobara shuro karny ky leya 
    for(let box of boxes){ //for of loop
        box.disabled=false;
        box.innerText="";
    }
}
const restgame = ()=>{
    turn=true;
    enabledBoxes();
    // msgContainar.classList.add("hide");
    // msgContainar.classList.remove("enable");
}

const showWinner=(winner) => {
    msg.innerText=`Congratulation the winner is ${winner}`;
    disabledBoxes(); //funtion
    // msgContainar.classList.add("enable");
    // msgContainar.classList.remove("hide");
}
const checkbox=()=>{
    msg.innerText="The match draw";
}

const checkwiner=()=>{ //function process
    for(let pattern of winpattern){   //pattern=idx , winpattern= win-ary , for-of-loop
        let posival1=boxes[pattern[0]].innerText;
        let posival2=boxes[pattern[1]].innerText;
        let posival3=boxes[pattern[2]].innerText;

        if(posival1 != "" && posival2 != "" && posival3 != ""){
            if(posival1===posival2 && posival2==posival3){
                // console.log("winer",posival1);
                showWinner(posival1); //function
            }
        }
    }
};
rest.addEventListener("click",restgame);
NewButton.addEventListener("click",restgame);