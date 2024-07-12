import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";
function App() {
  const [newItems, setNewItems] = useState([]);

  function handleAddItems(item) {
    setNewItems((items) => [...items, item]);
  }

  function handleDeleteBtn(id) {
    setNewItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setNewItems((items) =>
      items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    );
  }

  function handleClearBtn(){
    const confirmed = window.confirm("are you sure you want to delete all items?")
    if(confirmed) setNewItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList newItems={newItems} onDeleteItems={handleDeleteBtn} onToggleItems={handleToggleItems}
      onClearItems={handleClearBtn} />
      <Stats newItems={newItems} />
    </div>
  );
}




export default App;
