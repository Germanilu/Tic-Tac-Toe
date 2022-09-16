"use strict";
//Function to add cross
const player = (e) => {
    //Add cross on box
    e.target.classList.add("cross");
    //Get the id 
    let idNumber = e.target.id;
    console.log("SOY ID NUMBER ", idNumber);
    //Transform to integer
    let num = parseInt(idNumber);
    // Remove the integer from the array
    game = game.filter(e => e !== num);
    setTimeout(() => {
        return ia(game);
    }, 1000);
};
//Function IA
const ia = (arr) => {
    //Almaceno el indice aleatorio en la variable random
    let random = Math.floor(Math.random() * arr.length);
    //Pickeo algo aleatorio del array
    let iaPick = arr[random];
    //Convierto a string
    let iaPickString = iaPick.toString();
    //Quito del array lo que pikea el IA
    varArray.forEach(e => {
        if (iaPickString == (e === null || e === void 0 ? void 0 : e.dataset.value)) {
            //Add Circle on box
            e.classList.add("circle");
            //Remove from array Game
            game = game.filter(e => e !== iaPick);
        }
    });
};
let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let sixth = document.getElementById('6');
let seventh = document.getElementById('7');
let eighth = document.getElementById('8');
let ninth = document.getElementById('9');
let game = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let varArray = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
first === null || first === void 0 ? void 0 : first.addEventListener('click', player);
second === null || second === void 0 ? void 0 : second.addEventListener('click', player);
third === null || third === void 0 ? void 0 : third.addEventListener('click', player);
fourth === null || fourth === void 0 ? void 0 : fourth.addEventListener('click', player);
fifth === null || fifth === void 0 ? void 0 : fifth.addEventListener('click', player);
sixth === null || sixth === void 0 ? void 0 : sixth.addEventListener('click', player);
seventh === null || seventh === void 0 ? void 0 : seventh.addEventListener('click', player);
eighth === null || eighth === void 0 ? void 0 : eighth.addEventListener('click', player);
ninth === null || ninth === void 0 ? void 0 : ninth.addEventListener('click', player);
