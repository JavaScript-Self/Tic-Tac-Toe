let boxes = document.querySelectorAll('.box');
let reset = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn")
let count =0;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let x=true;
boxes.forEach(box => {
    box.addEventListener('click',()=>{
        if(x){
            box.textContent = "X";
            x=false;
        }else{
            box.textContent = "O";
            x=true;
        }
        box.disabled=true;
        count++;
        checkforWinner();

    })

});
function checkforWinner(){
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showwinner(pos1Val);
                return;

            }
        }  
    }
    if(count==9)showwinner("draw");

}
reset.addEventListener('click',newgame);
newbtn.addEventListener('click',newgame);
function disbaleremaining(){
    boxes.forEach(box =>{box.disabled=true;})

}
function showwinner(winner){
    if(winner=="draw"){
        msg.innerText = `${winner}`;
    }else{
        msg.innerText = `Winner is ${winner}`;
    }
    msgcontainer.classList.remove("hide");
    disbaleremaining();
}
function newgame(){
    x=true;
    enableboxes();
    count = 0;
    msgcontainer.classList.add("hide");

}
function enableboxes(){
    boxes.forEach(box =>{box.disabled=false;
    box.innerText = "";
})


}