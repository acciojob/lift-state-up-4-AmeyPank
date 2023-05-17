import React, { useState } from 'react';

const Parent = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (itemName, itemPrice) => {
    const newItem = { id: Date.now(), name: itemName, price: itemPrice };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildAddItem onAddItem={handleAddItem} />
      <div className='child-comp'>
        <h1>Child Component</h1>
      <ChildCartItems cartItems={cartItems} onRemoveItem={handleRemoveItem} />
      </div>
      
      
    </div>
  );
};

const ChildCartItems = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="child">
      {/* <h2>Cart Items</h2> */}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span>
            <span id="itemPrice"> - ${item.price}</span>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChildAddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleAddClick = () => {
    onAddItem(itemName, parseFloat(itemPrice));
    setItemName('');
    setItemPrice('');
  };

  return (
    <div className="child">
      <h2>Add Item</h2>
      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" value={itemName} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="itemPrice">Item Price:</label>
        <input type="number" id="itemPrice" value={itemPrice} onChange={handlePriceChange} />
      </div>
      <button onClick={handleAddClick}>Add Item</button>
    </div>
  );
};

export default Parent;
