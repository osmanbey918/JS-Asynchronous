// let mypromise = new Promise((resolve, reject) => {
//     let age = 28;
//     if (age > 18) {
//         resolve('success')
//     } else {
//         reject('rejected')
//     }
// }
// )
// let fun = (val) => {
//     console.log(val)
// }
// mypromise.then(value => {
//     fun(value)
//     return value
// }, error => {
//     fun('you are still a child')
//     return error
// })



// let promise = new Promise((resolve, reject) => {
//     // Set up the interval
//     let fn = () => {

//         let age = 30;
//         if (age > 18) {
//             resolve('Success: You are a good man');
//         } else {

//             reject('Error');
//         }
//     }
//     setInterval(fn, 200)
// })

//     promise
//         .then(value => {
//             console.log(value);
//             return value;
//         })
//         .catch(error => {
//             console.log('Error:', error);
//         });







let fun = () => {
    setTimeout(ppromise = () => new Promise((resolve, reject) => {
        let age = 20;
        if (age > 18) {
            resolve('you are a good man');
        } else reject('error');
    }).then(success = (val) => {
        console.log(val);
        return val;
    }, error = (val) => {
        console.log('reject');
    })

    ,1000)
}
// setInterval(fun,9000)
// setInterval(fun,2000)
fun()
fun()
// fun()
setTimeout(fun, 5000)
setTimeout(fun, 500)