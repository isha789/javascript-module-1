function getAgeInDays(age){
    return age * 365;
}
function createGreeting(name, age){
    const ageInDays = getAgeInDays(age);
    return `My Name is ${name} and i was born over ${ageInDays} days ago!`
     
}

console.log(createGreeting('isha', 20))
    