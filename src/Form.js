import React from 'react'
import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleClick(e) {
    e.preventDefault();
    if (!description) return;

    const packedItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };

    setDescription("");
    setQuantity(1);
    onAddItems(packedItems);
  }

  return (
    <form className="add-form" onSubmit={handleClick}>
      <h3>Hi Buddies! What do you need for your trip? 😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form
