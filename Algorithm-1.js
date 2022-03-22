// write a retry function such that it attempts to get a true response from the function at most N times.

//     Arguments
// func(Function): The function to invoke.It should return a true or false.
// [wait = 0](Number): The number of milliseconds to delay.
// [options = {}](Object): The options object
// [options.max](Number): Optional.The maximum number of times to invoke the function to get a success response.If null it will retry forever.
//     Returns
//     (Boolean): Returns true if the func returns a success response, false otherwise.

// // example
// let f = () => {
//     let d = new Date(); // current time
//     return d.getMilliseconds() % 2 == 0; // => true or false
// };

// retry(f, 1000, { max: 3 });       //=>  true or false after max of 3 times

function retry(callback, wait = 0, obj = {}) {
    const { max } = obj;
    let count = 0;

    while (count < max) {
        setTimeout(() => {
            let respone = callback();
            if (respone) {
                return true
            } else {
                count++
            }
        }, wait);
    }

    console.log("-----return------")
    return false
}

let f = () => {
    let d = new Date(); // current time
    return d.getMilliseconds() % 2 == 0; // => true or false
};

console.log(f())


console.log(retry(f, 1000, { max: 2 }))