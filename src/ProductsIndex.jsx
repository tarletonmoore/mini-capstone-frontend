export function ProductsIndex(props) {
console.log(props.products)
  return(
    <div>
     {props.products.map(product => (
      <div key={product.id}>
      <h1>{product.name}</h1>
      {/* <img src={product.images.map(image => (console.log(image.url)))}></img> */}
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>

      </div>
     ))}
    </div>
  )
}