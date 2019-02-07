import { getProducts, getSizes } from "./DataManager.js";
let appendProductToDom = document.querySelector("#productId")
let appendSizesToDom = document.querySelector("#sizeId")

let productArray = []
getProducts().then(products => {
    products.forEach(product => {
        productArray.push(product.name)
        appendProductToDom.innerHTML += `
          <option>${productArray}</option>
          `
    })
})
let sizeArray = []
getSizes().then(sizes => {
    sizes.forEach(size => {
        sizeArray.push(size.size)
        appendSizesToDom.innerHTML += `
          <option>${sizeArray}</option>
          `
    })
})
