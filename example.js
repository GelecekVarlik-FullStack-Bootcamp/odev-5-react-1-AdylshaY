// Verilerin bulunduğu json dosyasını okuduk ve "data" değişkeninin içerisinde sakladık.
// Burada kullanılan veriler mockaroo.com sitesinde oluşturulmuştur.
const data = require("./data.json").data

// ------------------------------------------------
// 1- Cinsiyete göre ayırma

var result = data.reduce(function(prev, person){
  if(person.gender === "Male"){
    prev.men.push(person)
  } else {
    prev.women.push(person)
  }
  return prev
}, {men: [], women: []})
// console.log(result)

// ------------------------------------------------
// 2- İsimlerin baş harflerine göre ayırma

result2 = data.reduce((prev, person) =>{
  let char = person.name[0]
  if(!prev[char]){
    prev[char] = [person]
  } else {
    prev[char].push(person)
  }
  return prev
}, {})
// console.log(result2)

// ------------------------------------------------
// 3- Yaşadığı şehirlere göre ayırma

result3 = data.reduce((prev, person) =>{
  let city = person.city
  if(!prev[city]){
    prev[city] = [person]
  } else {
    prev[city].push(person)
  }
  return prev
}, {})
// console.log(result3)

// ------------------------------------------------
// 4- Yaş ortalamasını hesaplama

result4 = data.reduce((sum, person, index) => {
  sum += person.age
  if (index === data.length - 1) {
    return sum / (index + 1)
  } else {
    return sum
  }
}, 0)
console.log(result4)

// ------------------------------------------------
// 5- Cinsiyete göre yaş ortalamasını hesaplama

result5 = data.reduce((sum, person, index) => {
  if (index === data.length-1) {
    return `Male: ${sum.male / (data.length/2)}, Female: ${sum.female / (data.length/2)}`
  } else {
    if (person.gender === "Male") {
      sum.male += person.age
    } else {
      sum.female += person.age
    }
    return sum
  }
}, { male: 0, female: 0 })

console.log(result5)