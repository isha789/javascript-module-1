const names = ['Daniel','Matthew','James','Irina','Mozafar','Asleigh']

const NAME_TO_FIND = 'Matthew'
function findName(names){
    if (names.find((name)=> name === NAME_TO_FIND)){
        return 'FOUND ME'
    }
    return 'Havent found me'
}
console.log(findName(names))