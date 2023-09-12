import { useState } from "react"

export function ProductsIndex(props) {
const [sortOrder, setSortOrder] = useState(1)

const toggleSortOrder = () => {
  setSortOrder(sortOrder * -1)
}

  return(
    <div id="posts-index">
              <button onClick={toggleSortOrder}>Sort By Price</button>
<br></br>
<br></br>
       <div className="row row-cols-2">
       {[].concat(props.products)
      .sort((a, b) => parseInt(a.price, 10) > parseInt(b.price, 10) ? sortOrder : -sortOrder)
     .map(product => (
      <div key={product.id}>
        <div className="col">
         <div className="card">
            <div className="card-body">
            {product.images.map(image => (
            <img src={image.url} width="100px"/>
          ))}
      <h1>{product.name}</h1>
      {/* <img src={product.images.map(image => (console.log(image.url)))}></img> */}
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Supplier: {product.supplier.name}</p>
      {/* <button onClick={() => props.onShowProduct(product)}>More info</button> */}
      <a href={`/products/${product.id}`}><button>Go to show page</button></a>
      </div>
      </div>   
      </div>   
      <br></br>
      </div>
     ))}
     </div>
    </div>
  )
}