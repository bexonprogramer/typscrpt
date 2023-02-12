
interface IPost {

    name: string,
    username: string,
    email: string,
    address: Iaddress
}
interface Iaddress {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: Igeo
}
interface Igeo {
    lat: number,
    lng: number
}

let obj = {

    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": 929983874,
        "geo": {
            "lat": -37.3159,
            "lng": 81.1496
        }
    }
}

interface Res {
    id: number,
}


async function elemPost(e: IPost) {
    const postobj = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
            'Content-Type':'application/json'
        } 
    });

    const data  = await postobj.json();
    return data
}
elemPost(obj).then((res : Res)=>{
console.log(res)
})



























// interface user {
//     userId : number,
//     id: number,
//     title: string,
//     info: userInfo
//     tags : [
//         tagsObj
//     ]
// }
// interface  userInfo {
//     desc: string,
//     isActive: boolean
// }
// interface  tagsObj {
//     name: string,
//     value: number,
// }


// let user: user = {
//     userId: 1,
//     id: 1,
//     title: 'delectus aut autem',
//     info: {
//      desc: 'delectus aut autem',
//      isActive: true
//     },
//     tags: [
//      {
//       name: 'my name',
//       value: 1000
//      }
//     ]
// }


