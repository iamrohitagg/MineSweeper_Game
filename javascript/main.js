'use strict';
function startGame(){
    let score = 0;
    //grid for the minesweeper
    let root = document.getElementById("root");
    //points section
    let points = document.getElementById("points");
    // butoon for new game
    let newGame = document.getElementById("start");
    let congo = document.getElementById("congo");
    
    //array for the bombs to be in grid
    //math.floor creates random value in range [0,1)
    let bombIndexes = Array.from({length:10},()=>Math.floor(Math.random()*81));
    // let bombIndexes = generateRandom([]);
    // console.log("her",bombIndexes);
    let visited = [];
    let gameOver  = false;
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
            cell.style.background = " rgb(224, 224, 139)";
            cell.setAttribute("id",currentIndex);
            cell.addEventListener("contextmenu", function(){
                if(!gameOver){
                    cell.style.textAlign = "center";
                    cell.innerHTML = "❗";
                    cell.style.position = "relative";
                    cell.style.top  = " -35px";
                    return false;
                    
                }
            }, false);
            cell.addEventListener("click",()=>{
                if(!bombIndexes.includes(currentIndex) && (!gameOver)){
                    if(!visited.includes(currentIndex)){
                        const col = 9
                        const row = 9
                        let bombs = 0;
                        if (currentIndex % col !== 1 && bombIndexes.includes(currentIndex - col - 1)) {
                            bombs++;
                        }
                        if (currentIndex > col && bombIndexes.includes(currentIndex - col)) {
                            bombs++;
                        }
                        if (currentIndex % col !== 0 && bombIndexes.includes(currentIndex - col + 1)) {
                            bombs++;
                        }
                        
                        if (currentIndex % col !== 1 && bombIndexes.includes(currentIndex - 1)) {
                            bombs++;
                        }
                        if (currentIndex % col !== 0 && bombIndexes.includes(currentIndex + 1)) {
                            bombs++;
                        }
                        if (currentIndex % col !== 1 && bombIndexes.includes(currentIndex + col - 1)) {
                            bombs++;
                        }
                        if (currentIndex <= col * (row - 1) && bombIndexes.includes(currentIndex + col)) {
                            bombs++;
                        }
                        if (currentIndex % col !== 0 && bombIndexes.includes(currentIndex + col + 1)) {
                            bombs++;
                        }
                        visited.push(currentIndex);
                        score++;
                        points.innerHTML = score;
                        points.style.fontSize = "40px";
                        cell.style.background = "green";
                        cell.innerHTML = bombs;
                        cell.style.position = "relative";
                        cell.style.top  = " -35px";
                        // cell.style.box-shadow = "10px 10px 10px rgba(0, 0, 0, 0.5)";
                    }       
                }
                else{
                    for(let j = 0;j < 10; j++){
                        gameOver = true;
                        let bomb = bombIndexes[j];
                        let bombNode = document.getElementById(bomb);
                        bombNode.style.background = "red";
                        bombNode.style.position = "relative";
                        bombNode.style.top = "-34px";
                        bombNode.innerHTML = "💣";
                    }
                    newGame.style.display = "block";
                }
            })
            row.appendChild(cell);
        }
        root.appendChild(row);
    }

    //displaying the congo div if score is equal to 72
    if(score == 72){
        congo.style.display = "block";
        
    }
    newGame.addEventListener("click",()=>{
        location.reload();
    })
    
    //applying styles to the start div
    newGame.style.fontSize = "40px";
    newGame.style.fontFamily = "cursive";
    newGame.style.border = " 3px solid black";
    
}   
startGame();
