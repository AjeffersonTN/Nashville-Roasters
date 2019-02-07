import { getProducts, getSizes } from "./DataManager.js";

let appendProductToDom = document.querySelector("#productId")
let appendSizesToDom = document.querySelector("#sizeId")


function fillForm() {s  `a  /`

    getProducts().then(products => {
        products.forEach(product => {
            appendProductToDom.innerHTML += `
          <option>${product.name}</option>
          `
        })
    })
    getSizes().then(sizes => {
        sizes.forEach(size => {
            appendSizesToDom.innerHTML += `
          <option>${size.size}</option>
          `
        })
    })
}
export {fillForm}