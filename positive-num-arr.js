function onlyPositive(arr){
    const arrPositive = [];
    for(const element of arr){
        if(element > 0){
            arrPositive.push(element);
        }
        else{
            break;
        }
    }
    return arrPositive;
}
const arr1 = [3, 5, 7, 44, 77, 2, -5, 89, 23];
const arrPositive =onlyPositive(arr1);
console.log(arrPositive);