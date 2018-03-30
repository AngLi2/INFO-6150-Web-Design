var sum = function (num: number):number {
    var total:number = 0
    for (var i = 0; i <= num; i++){
        total += i
    }
    return total
}
console.log(sum(10))
console.log(sum(100))
