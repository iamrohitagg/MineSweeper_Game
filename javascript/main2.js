"use strict";
// console.log("working");
function startGame() {
  let root = document.getElementById("root");
  let points = document.getElementById("points");
  let newGame = document.getElementById("newGame");
  let congo = document.getElementById("congo");

  // creating a random array of size 10 for the positions of bombs
  let bombIndexes = generateRandomArray();
  // console.log(Array.from(bombIndexes));

  let gameOver = false;
  let visited = [];
  let score = 0; //if score is 72, we would print "Congrats"

  for (let i = 0; i < 9; i += 1) {
    let row = document.createElement("div");

    row.style.display = "block";
    row.style.height = "50px";

    for (let x = 0; x < 9; x += 1) {
      // labeling each cell with its id
      let currentIndex = i * 9 + x;

      let cell = document.createElement("div");
      cell.style.display = "inline-block";
      cell.setAttribute("id", currentIndex);

      cell.style.height = "50px";
      cell.style.width = "50px";

      cell.style.border = "1px solid grey";
      cell.style.background = "lightgrey";
      row.appendChild(cell);

      // console.log(score);

      cell.addEventListener("click", () => {
        // alert(cell);
        // cell.style.background = "green";
        // Checking whether the currentIndex and bomberIndexes are not same

        if (!bombIndexes.has(currentIndex) && !gameOver) {
          if (!visited.includes(currentIndex)) {
            //it means they are not same
            // console.log("abhishek");
            visited.push(currentIndex);
            score += 1;
            if (score == 2) {
              congo.style.display = "block";
            }
            cell.style.background = "green";
            // console.log(score);
            points.innerHTML = score;
          }
        } else {
          // cell.style.background = "red";
          // it means, we have encountered the bomb index,
          // so game ends here, with showing all the positions
          // of bomb indexes
          gameOver = true;
          let bombArray = Array.from(bombIndexes);
          // console.log(bombArray);
          let bomb;
          let bombIndex;
          for (let j = 0; j < 9; j += 1) {
            bombIndex = bombArray[j];
            console.log(bombIndex);
            bomb = document.getElementById(bombIndex);
            bomb.style.background = "red";
          }
          newGame.style.display = "block";
          newGame.addEventListener("click", () => {
            location.reload();
          });
        }
      });
    }
    root.appendChild(row);
  }
}

function generateRandomArray() {
  let set = new Set();
  for (let i = 0; set.size != 10; i += 1) {
    set.add(Math.floor(Math.random() * 81));
  }
  return set;
}

startGame();
// "use strict";

// function startGame() {
//   console.log("working");

//   let root = document.getElementById("root");
//   let bomberIndexes = generateRandomNum();

//   // Math.random();
//   let gameover = false;

//   for (let i = 0; i < 9; i += 1) {
//     let row = document.createElement("div");
//     row.style.display = "block";
//     row.style.height = "20px";
//     //   row.style.width = "200px";

//     for (let x = 0; x < 9; x += 1) {
//       let currentIndex = i * 9 + x;

//       let cell = document.createElement("div");

//       cell.style.height = "20px";

//       cell.style.width = "20px";

//       cell.style.background = "lightgrey";

//       // cell.innerHTML = "frg";

//       cell.style.display = "inline-block";

//       cell.style.border = "1px solid black";
//       cell.setAttribute("id", currentIndex);
//       cell.addEventListener("click", () => {
//         if (!bomberIndexes.includes(currentIndex) && !gameover) {
//           //   alert("dasd");
//           cell.style.background = "green";
//         } else {
//           for (let j = 0; j < 10; j++) {
//             gameover = true;
//             let bomb = bomberIndexes[j];
//             let bombNode = document.getElementById(bomb);
//             cell.style.background = "red";
//           }
//           //   cell.style.background = "red";
//           //   cell.innerHTML = "emoji";
//         }
//       });
//       row.appendChild(cell);
//     }
//     root.appendChild(row);
//   }
// }

// // function generateRandomNum(bomberIndexes) {
// //   console.log("abhishek");
// //   let randomNumber = Math.ceil(Math.random() * 80);
// //   //   let bomberIndexes = [];

// //   if (bomberIndexes.length == 10) {
// //     return bomberIndexes;
// //   }
// //   if (!bomberIndexes.includes(randomNumber)) {
// //     bomberIndexes.push(randomNumber);
// //     generateRandomNum(bomberIndexes);

// //     // return;
// //   } else {
// //     generateRandomNum(bomberIndexes);
// //   }
// // }

// function generateRandomNum() {
//   let set = new Set();
//   for (let i = 0; set.size != 10; i++) {
//     set.add(Math.ceil(81 * Math.random()));
//   }
//   return set;
//   console.log(set);
// }

// startGame();