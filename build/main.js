"use strict";
//Setting up DOM Elements
let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let sixth = document.getElementById('6');
let seventh = document.getElementById('7');
let eighth = document.getElementById('8');
let ninth = document.getElementById('9');
//Arrays
//Array combinaciones ganadoras
let arrWinner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let game = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let varArray = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
let playerPick = [];
let iaPick = [];
//Variables
let user = "USER";
let ia = "IA";
let winner = false;
//Functions
//Player Game
const player = (e) => {
    //Add cross on box
    e.target.classList.add("cross");
    //Get the id of the element
    let idNumber = e.target.id;
    //Transform to integer
    let num = parseInt(idNumber);
    // Remove the integer from the array
    game = game.filter(e => e !== num);
    // Pusheo lo escogido por el player al array de playerPick
    playerPick.push(num);
    //Lanzo funcion para revisar si hay ganador
    checkWinner(playerPick, user);
    //Checking if we have a winner...
    setTimeout(() => {
        winner ? console.log("Game end") : iaDecision(game);
    }, 500);
};
//IA Game
const iaDecision = (arr) => {
    //Almaceno el indice aleatorio en la variable random
    let random = Math.floor(Math.random() * arr.length);
    //Pickeo algo aleatorio del array
    let iaNum = arr[random];
    // Pusheo lo escogido por el IA al array de iaPick
    iaPick.push(iaNum);
    //Convierto a string
    let iaPickString = iaNum.toString();
    //Quito del array lo que pikea el IA
    varArray.forEach(e => {
        if (iaPickString == (e === null || e === void 0 ? void 0 : e.dataset.value)) {
            //Add Circle on box
            e.classList.add("circle");
            //Remove from array Game
            game = game.filter(e => e !== iaNum);
        }
    });
    //Checking if we have a winner...
    checkWinner(iaPick, ia);
    winner ? console.log("Game end") : console.log("User need to pick");
};
//Function to check if we have a winner...
const checkWinner = (arrPick, winnerName) => {
    //Map arrWinner and check if arrPick include all the number to complete 1 winner combination if yes, declare a winner
    arrWinner.forEach(i => {
        if (i.every(e => arrPick.includes(e))) {
            console.log(winnerName, "WIN");
            //Map the winner array and connect each value of the array to the corresponding HTML Element
            i.forEach(e => {
                let winnerCombinationBox = varArray[e - 1];
                //Add new style to the element
                winnerCombinationBox === null || winnerCombinationBox === void 0 ? void 0 : winnerCombinationBox.classList.add("winnerBg");
            });
            return winner = true;
        }
    });
};
//Event Listener
first === null || first === void 0 ? void 0 : first.addEventListener('click', player);
second === null || second === void 0 ? void 0 : second.addEventListener('click', player);
third === null || third === void 0 ? void 0 : third.addEventListener('click', player);
fourth === null || fourth === void 0 ? void 0 : fourth.addEventListener('click', player);
fifth === null || fifth === void 0 ? void 0 : fifth.addEventListener('click', player);
sixth === null || sixth === void 0 ? void 0 : sixth.addEventListener('click', player);
seventh === null || seventh === void 0 ? void 0 : seventh.addEventListener('click', player);
eighth === null || eighth === void 0 ? void 0 : eighth.addEventListener('click', player);
ninth === null || ninth === void 0 ? void 0 : ninth.addEventListener('click', player);
