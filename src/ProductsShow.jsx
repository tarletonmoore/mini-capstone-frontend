import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function ProductsShow(props) {
  const [product, setProduct] = useState({images: []})

  const params = useParams()

  const getProductData = () => {
    console.log(params)       
    axios.get(`http://localhost:3000/products/${params.id}.json`).then(response => {
      console.log(response)
      setProduct(response.data)
    })
  }

  const handleAddToCart =  (event) => {
    event.preventDefault()
    const params = new FormData(event.target);

    console.log('adding to cart')
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data)
      window.location.href = '/carted_products'
    })
  }

       const handleSubmit = (event) => {
              event.preventDefault();
              const params = new FormData(event.target);
              props.onUpdateProduct(product.id, params, () => event.target.reset());
              window.location.href = `/products/${product.id}`

            };
    
           const handleClick = () => {
     props.onDestroyProduct(product)
           } 

  useEffect(getProductData, [])

  useEffect(props.getSuppliers, [])


  return (
  <div>

<h1>Product information</h1>
{product.images.map(image => (
            <img src={image.url} width="100px"/>
          ))}
      <p>Name: {product.name}</p>
      {/* <p>Url: {props.product.url}</p> */}
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {/* <p>is_discounted: {product.is_discounted}</p> */}
      {/* <p>tax: {product.tax}</p>
      <p>total: {product.total}</p> */}

      <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue={product.name} name="name" type="text" />
         </div>
         <div>
           Description: <input defaultValue={product.description} name="description" type="text" />
         </div>
         <div>
           Price: <input defaultValue={product.price} name="price" type="text" />
         </div>

   
         <div>
           Supplier: 
           <select name="supplier_id">
            {props.suppliers.map(supplier => (
              <option value={supplier.id}>{supplier.name}</option>
            ))}

          </select>
         </div>
         <button type="submit">Update product</button>
       </form>
<br></br>
       <button onClick={handleClick}>Delete product</button>
      <form onSubmit={handleAddToCart}>
        <div>
          quantity: <input name="quantity" type="number" />
        </div>
        <div>
          <input name="product_id" type="hidden" defaultValue={params.id} />
        </div>
     
        <button>Add to cart</button>  
      </form>
          
    </div>
  );
}