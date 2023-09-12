import axios from "axios";
import { useState, useEffect } from "react";

export function ProductsNew(props) {
// const [suppliers, setSuppliers] = useState([])
const [images, setImages] = useState(["", ""])
// const getSuppliers = () => {
//   axios.get("http://localhost:3000/suppliers.json").then(response => {
//     console.log(response.data)
//     setSuppliers(response.data)
//   })
// }

  const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         props.onCreateProduct(params, () => event.target.reset());
       };

       useEffect(props.getSuppliers, [])

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        
          Images:
        {images.map(image => (
          <div>

            <input type="text" name="images[]" />
          </div>

        ))}
        
        <div>
          Supplier: 
          <select name="supplier_id">
            {props.suppliers.map(supplier => (
              <option value={supplier.id}>{supplier.name}</option>
            ))}

          </select>
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}