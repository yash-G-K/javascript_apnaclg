
// const sum = (a, b) => a+b;
// const multiply = (a, b) => a*b;

// module.exports = { sum, multiply };

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};  
    