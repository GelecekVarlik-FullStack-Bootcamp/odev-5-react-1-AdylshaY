const person1 = {
    name: 'hakan',
    surname: 'özoğlu',
    age: '30',
    location: 'istanbul',
    gender: 'man',
    score: 10,
    workingDays: 90,
    books: 1,
}
const person2 = {
    name: 'akif',
    surname: 'özoğlu',
    age: '32',
    location: 'istanbul',
    gender: 'man',
    score: 17,
    workingDays: 17,
    books: 9,
}
const person3 = {
    name: 'beyza',
    surname: 'özoğlu',
    age: '16',
    location: 'trabzon',
    gender: 'woman',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person4 = {
    name: 'alp',
    surname: 'öztürk',
    age: '28',
    location: 'aydın',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person5 = {
    name: 'serdar',
    surname: 'çakır',
    age: '22',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}

const person6 = {
    name: 'rümeysa',
    surname: 'türkan',
    age: '22',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person7 = {
    name: 'mehmet ali',
    surname: 'tunay',
    age: '30',
    location: 'istanbul',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person8 = {
    name: 'furkan',
    surname: 'atsan',
    age: '23',
    location: 'ankara',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person9 = {
    name: 'kader',
    surname: 'arslan',
    age: '24',
    location: 'adana',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}
const person10 = {
    name: 'uğurcan',
    surname: 'uçar',
    age: '24',
    location: 'trabzon',
    gender: 'man',
    score: 28,
    workingDays: 64,
    books: 178,
}

let data = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10]

// İsimlerin baş harfine göre sınıflandırma
let result = data.reduce((prev, person) => {
    let char = person.name[0]
    if(!prev[char]){
        prev[char] = [person]
    } else {
        prev[char].push(person)
    }
    return prev
}, {})
console.log(result)

// Şehirlere göre sınıflandırma
let result2 = data.reduce((prev, person) => {
    let city = person.location
    if(!prev[city]){
        prev[city] = [person]
    } else {
        prev[city].push(person)
    }
    return prev
}, {})
console.log(result2)
