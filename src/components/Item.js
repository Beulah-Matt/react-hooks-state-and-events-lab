import React,{useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem]= useState(false)

  function handleCart(){
    setAddItem((addItem) => !addItem)
  }

  //const appClass = false ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={addItem? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItem ? "remove" : "add"} onClick={handleCart}>{addItem? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

// In the `Item` component, when the user clicks the `<button>` element, the item
// should be added to their virtual cart. The way we'll show the user that the item
// is in the cart is by changing the className on the `<li>` element:
