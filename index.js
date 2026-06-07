const movieslist = document.querySelector('.movies__list')
const productsList = document.querySelector(".products__list")


const getMovies = async () => {
    await fetch("http://localhost:3002/").then((response) => {
        return response.json()
    }).then((data) => {
        const dataItem = data.map((element) => {
            console.log(element)
            return `<li class="movies__item">
            <h4 class="movies__name">${element.title}</h4>
            <span class="movies__author">Author: ${element.author}</span>
          </li>`
        })
        movieslist.innerHTML = dataItem.join("")
    })
}

getMovies()



// const getProducts = async () => {
//     await fetch("http://localhost:3000/products").then((response) => {
//         return response.json()
//     }).then((data) => {
//         const dataItem = data.map((element) => {
//             console.log(element)
//             return `<li class="product__item">
//             <h4 class="product__name">${element.title}</h4>
//             <span class="product__author">Price: ${element.price}$</span>
//           </li>`
//         })
//         productsList.innerHTML = dataItem.join("")
//     })
// }

// getProducts()



// const getUsers = async () => {
//     await fetch("http://localhost:3000/users").then((response) => {
//         return response.json()
//     }).then((data) => {
//      console.log(data)
//     })
// }

// getUsers()