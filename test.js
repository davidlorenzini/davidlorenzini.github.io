(async function() {
    let x = new Promise((res, err) => res(12))
    let x1 = await x
    console.log(x1)
    let y = new Promise((res, err) => res(x))
    console.log(await y)


})()