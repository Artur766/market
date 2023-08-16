import { IProduct } from "../module"

export function getAllPorducts() {
  return fetch('https://fakestoreapi.com/products/?limit=8')
    .then(res => res.json())
}

export function createProduct(value: IProduct) {
  return fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(value)
  })
    .then(res => res.json())
}