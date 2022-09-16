//Function to add cross
const player = (e: any) => {
    //Add cross on box
    e.target.classList.add("cross")
    //Get the id 
    let idNumber: string = e.target.id
    console.log("SOY ID NUMBER ",idNumber)
    //Transform to integer
    let num = parseInt(idNumber)
    // Remove the integer from the array
    game = game.filter(e => e!== num)
    setTimeout(() => {
        return ia(game)
    }, 1000);
}


//Function IA
const ia = (arr: number[]) => {
    //Almaceno el indice aleatorio en la variable random
    let random: number = Math.floor(Math.random() * arr.length);
    //Pickeo algo aleatorio del array
    let iaPick: number = arr[random]
    //Convierto a string
    let iaPickString: string = iaPick.toString()
    //Quito del array lo que pikea el IA
    varArray.forEach(e => {
        if(iaPickString == e?.dataset.value){
            //Add Circle on box
            e.classList.add("circle")
            //Remove from array Game
            game = game.filter(e => e!== iaPick)
        }
    })
}


let first: HTMLElement|null = document.getElementById('1')
let second: HTMLElement|null = document.getElementById('2')
let third:HTMLElement|null = document.getElementById('3')
let fourth:HTMLElement|null = document.getElementById('4')
let fifth: HTMLElement|null = document.getElementById('5')
let sixth: HTMLElement|null = document.getElementById('6')
let seventh: HTMLElement|null = document.getElementById('7')
let eighth: HTMLElement|null = document.getElementById('8')
let ninth: HTMLElement|null = document.getElementById('9')


let game: number[] = [1,2,3,4,5,6,7,8,9]
let varArray = [first, second, third,fourth,fifth,sixth,seventh,eighth,ninth]



first?.addEventListener('click', player)
second?.addEventListener('click', player)
third?.addEventListener('click', player)
fourth?.addEventListener('click', player)
fifth?.addEventListener('click', player)
sixth?.addEventListener('click', player)
seventh?.addEventListener('click', player)
eighth?.addEventListener('click', player)
ninth?.addEventListener('click', player)







