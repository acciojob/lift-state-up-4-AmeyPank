import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 }
    ]);


    const handleAddItem=()=>{
        let newItem;
        if(itemName&&itemPrice){
            newItem={
                id: cartItems.length+1,
                name: itemName,
                price: Number(itemPrice),
            }
        }
        setCartItems((prevItems)=>[...prevItems,newItem]);
        setItemName('');
        setItemPrice('');
    }

    const handleRemoveItem = (itemId) => {

        setCartItems((prevItems) => {
            console.log("this is previtems", prevItems);
            return prevItems.filter((item) => item.id !== itemId)

        })
    }

    return (
        <div className="parent">

            <h1>Cart</h1>
            <div className="inputs">
                <input id="itemName"
                    type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
                <input id="itemPrice"
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    placeholder="Item Price"
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <Child cartItems={cartItems} onRemoveItem={handleRemoveItem}></Child>


        </div>
    )

}

export default Parent;