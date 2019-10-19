// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions.

// Higher-order functions allow us to abstract over actions, not just values.
// They come in several forms. For example, we can have functions that create
// new functions.

const noisy = (func) => {
    return (...args) => {
        console.log(`calling with args  ${args}`)
        const result = func(...args)
        console.log(`result = ${result}`)
        return result
    }
}

console.log(noisy(Math.min)(1,2,3,4))


// new types of control flow

// const unless = (test,then) => {
//     if(!test){
//         then()
//     }
// }

// repeat(3,unless(n => {
//     unless(n%2==0, () => {
//         console.log(n,"is even")
//     })
// }))

