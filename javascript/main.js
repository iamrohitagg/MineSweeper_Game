'use strict';
function startGame(){
    let score = 0;
    let root = document.getElementById("root");
    let points = document.getElementById("points");
    let newGame = document.getElementById("start");
    let congo = document.getElementById("congo");
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
                        cell.style.background = "green";
                        cell.innerHTML = bombs;
                        cell.style.position = "relative";
                        cell.style.top  = " -35px";
                    }       
                }
                else{
                    for(let j = 0;j<10;j++){
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
    if(score == 72){
        congo.style.display = "block";
    }
    newGame.addEventListener("click",()=>{
        location.reload();
    })
}   
startGame();
