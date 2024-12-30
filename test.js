let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset-btn');
let msg = document.querySelector('#msg');

let player1 = '0', player2='X';
let currentPlayer = player1;

const arrPattern= [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(currentPlayer===player1)
            {
                box.innerHTML = 'O';
                currentPlayer = player2;
            }
            else{
                box.innerHTML = 'X';
                currentPlayer = player1;
            }
            box.disabled = true;
            checkWinner();
    })
})

let checkWinner = () => 
{
    for(pattern of arrPattern)
    {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if(pos1 != "" && pos2 !="" && pos3 != "")
        {
            if(pos1===pos2 && pos2===pos3)
                {
                    showWinner(pos1);
                    disableboxes();
                }
        }
    }
}

const showWinner = (pos) =>{

    msg.innerHTML = `Congratulations ! Winner is ${pos}`;
    
}

const disableboxes = () => {
    for (let box of boxes)
    {
        box.disabled = true;
    }
}
