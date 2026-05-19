import List from "../files/List";
import Form from "../files/Form";
import {useState} from "react";

const Main = ({items, addItems, doneItem, deleteItem})=> {
  const [sortBy, setSortBy] = useState("input")
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
    .slice()
    .sort((a,b) => Number(a.packed) - Number (b.packed));
  }

  return (
    <div>
      < Form addItems={addItems}/>
      <ul className="mainWrap">
        {sortedItems.map((item) => (
        < List
          item={item}
          key={item.id}
          doneItem={doneItem}
          deleteItem={deleteItem}
         />
        ))}
      </ul>
    </div>
  )
};

export default Main;