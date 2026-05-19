const List = ({item, doneItem, deleteItem}) => {
  const {product, quantity, packed, id} = item;
  return (
    <li className="listWrap">
    <span>{quantity}</span>
    <p style={packed ? {textDecoration: "line-through"} : { }}>{product}</p>
    <div>
      <button 
      className="done"
      onClick={()=> doneItem(id)}
      >Done</button>
      <button 
      onClick={()=> deleteItem(id)}
      className="delete">Delete</button>
    </div>
    </li>

  )
};

export default List;