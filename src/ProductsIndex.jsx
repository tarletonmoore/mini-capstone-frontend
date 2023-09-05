export function ProductsIndex(props) {
  return(
    <div id="posts-index">
     {props.products.map(product => (
      <div key={product.id}>
         <div className="card">
            <div className="card-body">
      <h1>{product.name}</h1>
      {/* <img src={product.images.map(image => (console.log(image.url)))}></img> */}
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => props.onShowProduct(product)}>More info</button>
      </div>   
      </div>   
      <br></br>
      </div>
     ))}
    </div>
  )
}