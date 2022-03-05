

Number = 3
function checkingexpressions(message){
    if (message === 'happy'){
        return ` good job you are doing well`;
    }

 else if (message === 'sad'){
    return `everycloud has a silver lining`
}
else if ( message === Number){
   return `beep beep boop`
}
else  {
    return `i am sorry, i am still learning about feelings`
}
}


console.log(checkingexpressions())