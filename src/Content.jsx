import { useEffect, useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { Modal } from "./Modal"
import { ProductsShow } from "./ProductsShow"
import { ProductsNew } from "./ProductsNew"
import { Routes, Route } from "react-router-dom";
import { CartedProductsIndex } from "./CartedProductsIndex"


export function Content() {
const [products, setProducts] = useState([])
const [isProductsShowVisible, setIsProductsShowVisible] = useState(false)
const [currentProduct, setCurrentProduct] = useState({})
const [suppliers, setSuppliers] = useState([])


// const [images, setImages] = useState([])

const getProducts = () => {
  axios.get("http://localhost:3000/products.json").then(response => {
    console.log(response.data)
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

const handleCreateProduct = (params, successCallback) => {
       axios.post("http://localhost:3000/products.json", params).then((response) => {
         setProducts([...products, response.data]);
         successCallback();
       });
     };

const handleUpdateProduct = (id, params, successCallback) => {
           console.log("handleUpdateProduct", params);
        axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
             setProducts(
               products.map((product) => {
                 if (product.id === response.data.id) {
                   return response.data;
                 } else {
                   return product;
                 }
               })
             );
             successCallback();
             handleClose();
           });
         };

const handleDestroyProduct = (product) => {
               console.log("handleDestroyProduct", product);
               axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
                 setProducts(products.filter((p) => p.id !== product.id));
                 window.location.href = '/products'
                });
             };

             const getSuppliers = () => {
              axios.get("http://localhost:3000/suppliers.json").then(response => {
                console.log(response.data)
                setSuppliers(response.data)
              })
            }

useEffect(getProducts, [])
  return (
    <div>
      
      {/* <Modal show={isProductsShowVisible} onClose={handleClose}> 
      <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct}/>
      </Modal> */}
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     <Route path="/products" element={<ProductsIndex products={products} onShowProduct={handleShowProduct}/>} />
     <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} getSuppliers={getSuppliers} suppliers={suppliers} />
} />

     <Route path="/products/:id" element={<ProductsShow onDestroyProduct={handleDestroyProduct} onUpdateProduct={handleUpdateProduct} suppliers={suppliers} getSuppliers={getSuppliers} />} />
      <Route path="/carted_products" element={<CartedProductsIndex />} />

      </Routes>
    </div>
  )
}