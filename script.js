// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);

//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
//     document.head.append(script);



// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(error, success) {
//     if (error) {
//         alert(error)
//     } else {
//         alert(`Cool, the script ${success.src} is loaded`);
//     }
//     //   alert( _ ); // function declared in the loaded script
// });


// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
//     setTimeout(() => {
//         // resolve({ name: 'P217' })
//         reject('salam')
//     }, 1000);
// });

// // promise.then(
// //     (result) => console.log(result),
// //     (reject) => console.log(reject),
// // )

// promise.catch((e) => console.log(e))

// // console.log(promise);

// // let count = 0;
// // let timer = setInterval(() => {
// //     console.log(promise);
// //     count++
// //     if (count >= 20) {
// //         clearInterval(timer);
// //     }
// // }, 200);

// function loadScript(src) {
//     console.log(src);
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve('loaded');
//         script.onerror = () => reject('has error')
//         document.head.append(script);
//     })
// }



// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
// .then(
//     success =>{
//         loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
//     },
//     error => {
//         console.log(error);
//     }
// ).then(

// ).then(

// )


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);

//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
//     document.head.append(script);



// }


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((e) => console.log(e))

// Promise.allSettled([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((e) => console.log(e));


// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(alert);


// setTimeout(() => {
//     console.log(settledData);
// }, 4000);

async function showAvatar() {


    // read our JSON
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    // console.log(user);

    // for (let i = 0; i < user.length; i++) {
    //     console.log(user[i].name);

    //     // let nameText = document.createTextNode(`${user[i].name}`);
    //     // let surnameText = document.createTextNode(`${user[i].surname}`);
    //     // let emailText = document.createTextNode(`${user[i].email}`);

    //     // let div = document.createElement('div');

    //     // let name = document.getElementById('name');
    //     // name.append(nameText);
    //     // let surname = document.getElementById('surname');
    //     // surname.append(surnameText);
    //     // let email = document.getElementById('email');
    //     // email.append(emailText);

    //     // div.append(name, surname, email);
    //     // document.body.append(div);

    // }

    let htmlNodes = ''
    users.forEach(user => {
        htmlNodes += `
        <div class="card">
            <h1>${user.name}</h1>
            <p>${user.email}</p>
        </div>`
    });
    document.getElementById('card-list').innerHTML = htmlNodes
}

showAvatar();