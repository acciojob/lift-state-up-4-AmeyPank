import React,{useState} from "react";

const Child=({cartItems,onRemoveItem})=>{
    const handleRemoveClick=(itemId)=>{
        onRemoveItem(itemId);
    }

    return(
        <div className="child">
            <ul>
                {cartItems && cartItems.map((item)=>(
                    <li key={item.id}>
                        <span id="itemName">{item.name}</span>
                        <span id="itemPrice">{` - $${item.price}`}</span>
                        <button onClick={()=>handleRemoveClick(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Child;