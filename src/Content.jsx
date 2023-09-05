import { useEffect, useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"

export function Content() {
const [products, setProducts] = useState([])

const getProducts = () => {
  console.log("Getting products")
  axios.get("http://localhost:3000/products.json").then(response => {
    console.log(response.data)
    setProducts(response.data)
  })
}

useEffect(getProducts, [])
  return (
    <div>
      <Signup />
      <Login />
      <br></br>
      <LogoutLink />
      <ProductsIndex products={products}/>
    </div>
  )
}