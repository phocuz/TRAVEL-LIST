import React from 'react'

function Stats({newItems}){

  if(!newItems.length){
   return  <p className="stats"><em>Start adding some items to your packing list🚀</em></p>
  }
 const totalItems = newItems.length;
 const packedItems =newItems.filter(item=>item.packed).length
 const percentage = Math.round((packedItems/totalItems)*100)
  return(
    <footer className="stats">
      <em>{percentage === 100 ? 'you got everyting, ready to go ✈️':`💼You have an ${totalItems} items on your list, and you already packed ${packedItems}(${percentage}%)`}</em>
    </footer>
  );
}


export default Stats
