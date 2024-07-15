function customSort(arr) {
    const odds = [];
    const evens = [];
    for (const num of arr) {
        if (num % 2 !== 0) {
            odds.push(num);
        } else {
            evens.push(num);
        }
    }
    odds.sort((a, b) => a - b);
    evens.sort((a, b) => a - b);
    return [...odds, ...evens];
}

console.log(customSort([4, 2, 5, 7, 1, 6]));
console.log(customSort([25, 40, 14, 91, 31, 22, 49, 13, 6]));
