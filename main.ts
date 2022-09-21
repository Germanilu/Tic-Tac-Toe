//Setting up DOM Elements
let first: HTMLElement | null = document.getElementById('1')
let second: HTMLElement | null = document.getElementById('2')
let third: HTMLElement | null = document.getElementById('3')
let fourth: HTMLElement | null = document.getElementById('4')
let fifth: HTMLElement | null = document.getElementById('5')
let sixth: HTMLElement | null = document.getElementById('6')
let seventh: HTMLElement | null = document.getElementById('7')
let eighth: HTMLElement | null = document.getElementById('8')
let ninth: HTMLElement | null = document.getElementById('9')


//Arrays
//Array combinaciones ganadoras
let arrWinner: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let game: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let varArray = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
let playerPick: number[] = [];
let iaPick: number[] = [];

//Variables
let user: string = "USER";
let ia: string = "IA";
let winner: boolean = false;

//Functions

//Player Game
const player = (e: any) => {
    //Add cross on box
    e.target.classList.add("cross");
    //Get the id of the element
    let idNumber: string = e.target.id;
    //Transform to integer
    let num: number = parseInt(idNumber);
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
const iaDecision = (arr: number[]) => {
    //Almaceno el indice aleatorio en la variable random
    let random: number = Math.floor(Math.random() * arr.length);
    //Pickeo algo aleatorio del array
    let iaNum: number = arr[random];
    // Pusheo lo escogido por el IA al array de iaPick
    iaPick.push(iaNum);
    //Convierto a string
    let iaPickString: string = iaNum.toString();
    //Quito del array lo que pikea el IA
    varArray.forEach(e => {
        if (iaPickString == e?.dataset.value) {
            //Add Circle on box
            e.classList.add("circle");
            //Remove from array Game
            game = game.filter(e => e !== iaNum);
        }
    });
    //Checking if we have a winner...
    checkWinner(iaPick, ia);
    winner ? console.log("Game end") : console.log("User need to pick");
}

//Function to check if we have a winner...
const checkWinner = (arrPick: number[], winnerName: string) => {
    //Map arrWinner and check if arrPick include all the number to complete 1 winner combination if yes, declare a winner
    arrWinner.forEach(i => {
        if (i.every(e => arrPick.includes(e))) {
            console.log(winnerName, "WIN");
            //Map the winner array and connect each value of the array to the corresponding HTML Element
            i.forEach(e => {
                let winnerCombinationBox :HTMLElement | null = varArray[e - 1]
                //Add new style to the element
                winnerCombinationBox?.classList.add("winnerBg")
            })
            return winner = true;
        }
    });
};


//Event Listener
first?.addEventListener('click', player);
second?.addEventListener('click', player);
third?.addEventListener('click', player);
fourth?.addEventListener('click', player);
fifth?.addEventListener('click', player);
sixth?.addEventListener('click', player);
seventh?.addEventListener('click', player);
eighth?.addEventListener('click', player);
ninth?.addEventListener('click', player);
