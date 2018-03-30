var sum = function (num) {
    var total = 0;
    for (var i = 0; i <= num; i++) {
        total += i;
    }
    return total;
};
console.log(sum(10));
console.log(sum(100));
