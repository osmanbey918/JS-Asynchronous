let mypromise = new Promise((resolve, reject) => {
    let age = 28;
    if (age > 18) {
        resolve('success')
    } else {
        reject('rejected')
    }
}
)
let fun = (val) => {
    console.log(val)
}
mypromise.then(value => {
    fun(value)
    return value
}, error => {
    fun('you are still a child')
    return error
})