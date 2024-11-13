
const calculator = {
    add: (x, y) => x + y,
    substract: (x, y) => x - y,
    divide: (x, y) => {
        if(y === 0 || x === 0){
            throw new Error("Cannot divide by zero.")
        }
        return x / y;
    },
    multiply: (x, y) => x * y,
}

module.exports = calculator;