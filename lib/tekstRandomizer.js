//
// // comes from list, scans over list with map or filter look at studentId
// const classList13 = [
//   { "studentName": "Arthur Zeeman", "green": true, "yellow": false, "red": false }]
//
// // Filter on key and value?
// function tekstRandomizer(, green, yellow, red) {
//   if (green == true)
//     return green1.concat(name)
//   else if (yellow == true)
//     yellow1.push(name)
//   else if (red == true)
//     red1.push(name)
// }
//
// // classList13.map(insertfunction, tekstRandomizer )
// classList13.map(tekstRandomizer)

// gets pushed into green yellow or red based on evalutionColor key, if value green/yellow/red is true

const green = ["Art ", "Jan ", "Klaas "]
const randomGreen = green[Math.floor(Math.random()*green.length)]

const yellow = ["Marije ", "Bo ", "Cas "]
const randomYellow = yellow[Math.floor(Math.random()*yellow.length)]

const red = ["Piet ", "Ben ", "Johan "]
const randomRed = red[Math.floor(Math.random()*red.length)]



const randomStudent = Math.random() * 100
if (randomStudent < 21 18)          // 0 - 20 > 21%
    console.log('Ask ' + randomGreen + 'a question.')
else if (randomStudent < 51)    // 21 - 52 > 32%
    console.log('Ask ' + randomYellow + 'a question.')
else                // 52 - 99 > 47%
    console.log('Ask ' + randomRed + 'a question.')


//  make into a function
//
// const randomGreen = []
// const randomYellow = []
// const randomRed = []
//
//     function tekstRandomizer(randomStudent) {
//       if (randomStudent >= 3) {
//         return randomGreen.push(randomStudent)
//       }
//       if (randomStudent === 2) {
//         return randomYellow.push(randomStudent)
//       }
//       if (randomStudent < 2) {
//         return randomRed.push(randomStudent)
//       }
//     }
