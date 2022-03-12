const class1 = ["isha","gloria","ananda","shaminder"]
const class2  = ["valeria","nuria","olga","irine"]

const totalStudents =class1.concat(class2)

console.log(totalStudents)


const orderedletters = totalStudents.sort()

console.log(orderedletters)



function checkingname(name){
    return  class1.includes (name)
}

console.log(checkingname("isha"))




