// function httpGetAsync(theUrl, callback){
//     var xmlHttp = new XMLHttpRequest()
//     xmlHttp.onreadystatechange = ()=>{
//         if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
//         callback(xmlHttp)
//     }
//     xmlHttp.open("GET", theUrl, true)
//     xmlHttp.send(null)
// }

// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data)
//     document.getElementById('img_1').setAttribute('src', data.responseURL)

//     httpGetAsync('https://picsum.photos/200/300', (data)=>{
//         document.getElementById('img_2').setAttribute('src', data.responseURL)

//         httpGetAsync('https://picsum.photos/200/300', (data)=>{
//             document.getElementById('img_3').setAttribute('src', data.responseURL)
//         })
//     })
// })

//Promise:
// function httpGetAsync(theUrl, resolve) {
//     var xmlHttp = new XMLHttpRequest()
//     xmlHttp.onreadystatechange = () => {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp)
//     }
//     xmlHttp.open('GET', theUrl, true)
//     xmlHttp.send(null)
// }

// const currentPromise = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
//     // let isValid = true;
//     // if (isValid) {
//     //     setTimeout(() => {
//     //         resolve('Success')
//     //     }, 3000)
//     // } else {
//     //     reject('Error')
//     // }
// })
// const currentPromise2 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// })
// const currentPromise3 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve)
// })


// currentPromise
//   .then((data) => {
//     console.log(data)
//     document.getElementById('img_1').setAttribute('src', data.responseURL)
//     return currentPromise2
//   })
//   .then((data) => {
//     document.getElementById('img_2').setAttribute('src', data.responseURL)
//     return currentPromise3
//   })
//   .then((data) => {
//     document.getElementById('img_3').setAttribute('src', data.responseURL)
//   })
//   .catch((err) => {
//     console.log(err)
//   })



//Async / Await:

// const executeAsync = async () => {
//     try {
//         const response = await currentPromise
//         console.log(response)
//         document.getElementById('img_1').setAttribute('src', response.responseURL)
//         const response2 = await currentPromise2
//         document.getElementById('img_2').setAttribute('src', response2.responseURL)
//         const response3 = await currentPromise3
//         document.getElementById('img_3').setAttribute('src', response3.responseURL)
//     } catch (error) {
//         console.log({error});
//     }
// }
// executeAsync()


// //promise:
// const promise = fetch('https://jsonplaceholder.typicode.com/users')

// promise
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => {
//     console.log(err)
// })

// console.log('long test promise') // run first




const getLongTeo = async(name)=>{
    return name

}

const testSpeed = async()=>{
    const logL = await getLongTeo(('l'))
    const logO = await getLongTeo(('o'))
    const logN = await getLongTeo(('n'))
    const logG = await getLongTeo(('g'))
    const arr = await Promise.all([logL,logO,logN,logG])
    return arr;
}

console.time("test time")
testSpeed().then(arr => {
    console.log(arr)
    console.timeEnd("test time")
})