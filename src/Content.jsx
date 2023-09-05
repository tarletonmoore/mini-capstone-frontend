import { useEffect, useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { Modal } from "./Modal"
import { ProductsShow } from "./ProductsShow"

export function Content() {
const [products, setProducts] = useState([])
const [isProductsShowVisible, setIsProductsShowVisible] = useState(false)
const [currentProduct, setCurrentProduct] = useState({})

const getProducts = () => {
  axios.get("http://localhost:3000/products.json").then(response => {
    setProducts(response.data)
  })
}

const handleShowProduct = (product) => {
console.log(product)
setIsProductsShowVisible(true)
setCurrentProduct(product)
}

const handleClose = () => {
  setIsProductsShowVisible(false)
}

useEffect(getProducts, [])
  return (
    <div>
      <Signup />
      <Login />
      <br></br>
      <LogoutLink />
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductsShowVisible} onClose={handleClose}> 
      <ProductsShow product={currentProduct}/>
      </Modal>
    </div>
  )
}