//take an array, multiply each element by 2, and return a new array with the results using map function
const array1 = [1, 2, 3, 4, 5];
// const newArray1 = []
// for (let i = 0; i < array1.length; i++){
//    newArray1.push(array1[i]*2)    
// }

const newArray1 = array1.map(
    function (i){
        return i * 2
    }
)
console.log(newArray1)


//take an array and give all the even values out of it using filter function
const array2 = [1, 2, 3, 4, 5]
//const newArray2 = []
//for (let i = 0; i<array2.length; i++){
//    if (array2[i] % 2 == 0){
//        newArray2.push(array2[i])
//    }
//}

function filteringLogic(n){
    if (n % 2 == 0){
        return true;
    }else{
        return false;
    }
}
const newArray2 = array2.filter(filteringLogic)
console.log(newArray2)

const newArrayTrial = array2.filter((n) => {
        if (n % 2 == 0){
            return true
        }else{
            return false
        }
    }
)
console.log(newArrayTrial)