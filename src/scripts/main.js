import { getOrders, getProducts, getSizes, createOrder } from "./DataManager.js"

let sizes = []

getSizes().then(
    (arrayOfSizes) => {
        // 100% sure we have sizes
        console.log(arrayOfSizes)
        sizes = arrayOfSizes
    }
).then(
    () => {
         return getProducts()
    }
)
.then(
    (productArray) => {
        console.log(productArray)
        console.log(sizes)
    }
)

