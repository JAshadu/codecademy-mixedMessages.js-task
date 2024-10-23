const greeting = ['Hi', 'Bonjour', 'Hola', 'Guten Tag', 'Ciao', 'Namaste', 'Ni hao', 'Konnichi wa']
let i = Math.floor(Math.random() * greeting.length)
let theGreeting = greeting[i]
const language = ['England', 'France', 'Spain', 'Germany', 'Italy', 'India', 'China', 'Japan']
let theLanguage = language[i]
const name = ['Amanda', 'Benny', 'Charlie', 'Dennis', 'Elijah', 'Finland', 'Gerald', 'Hassan', 'Ijenu', 'Jacob', 'Karl', 'Liam', 'Mary', 'Nana', 'Oscar', 'Piper', 'Quincy', 'Raymond', 'Steven', 'Tilly', 'Unice', 'Victor', 'Wapol', 'Xavier', 'Yewande', 'Zack']
let a = Math.floor(Math.random() * name.length)
let theName = name[a]
let partner = () => {
  if(name[a] !== theName) {
    return name[a]
  }
}
const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet']
let theColor = color[Math.floor(Math.random() * color.length)]
const sport = ['football','basketball', 'tennis', 'table tennis', 'swimming', 'volleyball', 'netball', 'hockey', 'badminton']
let theSport = sport[Math.floor(Math.random() * sport.length)]
const food = ['spaghetti', 'fish n chips', 'pizza', 'jollof rice', 'fried rice', 'noodles', 'lasagne', 'tacos', 'fried chicken', 'sushi']
let j = Math.floor(Math.random() * food.length)
let theFood = food[j]
let leastFav = () => {
  if(food[j] !== theFood) {
    return food[j]
    }
}
console.log(`${theGreeting}! My name is ${theName} and I was born in ${theLanguage}. My favourite color is ${theColor}. According to my partner ${partner}, the sport I am best at is ${theSport}. My favourite food is ${theFood} and my least favourite food is ${leastFav}.`)