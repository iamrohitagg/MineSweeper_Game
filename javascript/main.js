'use strict';
function startGame(){
    //score for the game 
    let score = 0;
    
    // fetching the div using getElementByI
    let root = document.getElementById("root");
    let points = document.getElementById("points");
    let newGame = document.getElementById("start");
    let congo = document.getElementById("congo");
    
    //the array used for positioning of the bombs in grid
    let bombIndexes = Array.from({length:10},()=>Math.floor(Math.random()*82));
    // let bombIndexes = generateRandom([]);
    console.log("her",bombIndexes);
    
    //the current index when the user clicks on the grid
    let visited = [];
    let gameOver  = false;
    
    // making the grid to be displayed
    for(let i  = 0;i < 9;i++){
        let row = document.createElement("div");
        row.style.height = "50px";
        for(let x = 0;x < 9; x++){
            let currentIndex = i*9 + x;
            
            let cell = document.createElement("div");
            cell.style.height = "50px";
            cell.style.width = "50px";
            cell.innerHTML = "";
            cell.style.display = "inline-block";
            cell.style.border = "1px solid black";
            cell.style.background = "#ccccff";
            cell.setAttribute("id",currentIndex);
            cell.addEventListener("click",()=>{
                if(!bombIndexes.includes(currentIndex) && (!gameOver)){
                    if(!visited.includes(currentIndex)){
                        visited.push(currentIndex);
                        score++;
                        points.innerHTML = score;
                        cell.style.background = "green";
                        
                    }       
                }
                else{
                    for(let j = 0;j<10;j++){
                        gameOver = true;
                        let bomb = bombIndexes[j];
                        let bombNode = document.getElementById(bomb);
                        bombNode.style.background = "red";
                        bombNode.style.position = "relative";
                        bombNode.style.top = "-37px";
                        bombNode.innerHTML = "💣";
                    }
                    newGame.style.display = "block";
                }
            })
            row.appendChild(cell);
        }
        root.appendChild(row);
    }
    
    //if the score is 72,  the user wins  the game
    if(score == 72){
        congo.style.display = "block";
    }
    
    //adding button for the new game 
    newGame.addEventListener("click",()=>{
        location.reload();
    })
}
//the function being revoked
startGame();
