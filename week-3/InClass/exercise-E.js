const birthyears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function calculateAge(birthYear){
    return 2022 - birthYear
}
const ages = []
birthyears.forEach((birthYear) => {
    ages.push(calculateAge(birthYear))
})



console.log(birthyears)
console.log(ages)

