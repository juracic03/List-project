import Header from "./files/Header";
import Footer from "./files/Footer";
import Main from "./files/Main";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]);
  const addItems = (item) => {
      setItems((items) => [...items, item]);
  };

  const doneItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed : !item.packed } : item));
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }; 

  const itemCounter = items.length;
  return (
    <div className="App">
      <Header />
      <Main 
      items={items}
      addItems={addItems}
      deleteItem={deleteItem}
      doneItem={doneItem}
      />
      <Footer items={items} itemCounter={itemCounter} />
    </div>
  );
}

export default App;
