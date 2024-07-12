import React from 'react'
import { useState } from 'react';
import Item from './Item';

function PackingList({ newItems, onDeleteItems, onToggleItems,onClearItems }) {
  const[sortBy,setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = newItems;

  if (sortBy === "description") 
    sortedItems = newItems.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = newItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by Packed Status</option>
        </select>

        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}



export default PackingList
