//const great = usertype === "admin" || usertype === "manager"
function checkinguser(username,usertype){


if ( username.length > 5 && username.length < 10 && username[0] === username[0].toUpperCase() && usertype === "admin"){
    return `Username Valid`
}
else {
    return `Username Invalid `
}
}

console.log(checkinguser(`Ishaaa`, `admin`))

 //usertype === manager && usertype === admin
 //username.length > 5 && username.length < 10 && username[0] === username[0].toUpperCase()