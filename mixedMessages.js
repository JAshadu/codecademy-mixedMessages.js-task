// make an array of greetings
const greeting = ['Hi', 'Bonjour', 'Hola', 'Guten Tag', 'Ciao', 'Namaste', 'Ni hao', 'Konnichi wa']
let i = Math.floor(Math.random(greeting.length))
let theGreeting = greeting[i]
// make an array of languages equal to the greetings
const language = ['England', 'France', 'Spain', 'Germany', 'Italy', 'India', 'China', 'Japan']
let theLanguage = language[i]
// make an array of names
const name = ['Amanda', 'Benny', 'Charlie', 'Dennis', 'Elijah', 'Finland', 'Gerald', 'Hassan', 'Ijenu', 'Jacob', 'Karl', 'Liam', 'Mary', 'Nana', 'Oscar', 'Piper', 'Quincy', 'Raymond', 'Steven', 'Tilly', 'Unice', 'Victor', 'Wapol', 'Xavier', 'Yewande', 'Zack']
let theName = name[Math.floor(Math.random(name.length))]
// make an array of colors
const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet']
let theColor = color[Math.floor(Math.random(color.length))]
// make an array of sports
const sport = ['football','basketball', 'tennis', 'table tennis', 'swimming', 'volleyball', 'netball', 'hockey', 'badminton']
let theSport = sport[Math.floor(Math.random(sport.length))]
// make an array of foods
const food = ['spaghetti', 'fish n chips', 'pizza', 'jollof rice', 'fried rice', 'noodles', 'lasagne', 'tacos', 'fried chicken', 'sushi']
let j = Math.floor(Math.random(food.length))
let theFood = food[j]
// loop through food array, add if/else for least favourite
let leastFav = food[j] => {
    if(food[j] !== theFood[j]) {
        return food[j]
    }
}
// console 4 sentences that incorporate these items
/*console.log(`${theGreeting}! My name is ${theName} and I was born in ${theLanguage}. My favourite color is ${theColor}. According to my partner ${theName}, the sport I am best at is ${theSport}. My favourite food is ${theFood} and my least favourite food is ${leastFav}.`)*/