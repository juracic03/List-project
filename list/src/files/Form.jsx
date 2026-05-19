import {useState} from "react";


const Form = ({ addItems }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const Submit = (e) => {
    e.preventDefault();
    if (product) {
        const toDo = {
          id: Date.now(),
          product,
          packed: false,
          quantity,
        };
        console.log(toDo);
        addItems(toDo);
        setProduct("");
        setQuantity(1);
    }
  }
return (
 <div>

  <form 
  className="form" 
  onSubmit={Submit}>
{/* za dropdown listo */}
  <select 
  className="select" 
  value={quantity} 
 
  onChange={(e) => setQuantity(Number(e.target.value))}>

    {[...Array(20)].map((_, index) => (
    <option 
    value={index+1}
    key = {index+1}>
      {index+1}
      </option>
    ))}
  </select>

  <input 
  className="input" 
  type="text" 
  placeholder="Enter an item..." 
  value={product} 
  onChange={(e) => {
    setProduct(e.target.value);
  }}></input>
  <button className="addBtn">Add to the list ✔</button>
  </form>
 </div>
);
};
export default Form;
