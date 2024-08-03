import React from 'react';
import './ProductList.css';

function ProductList(props) {

  const total = props.items.reduce((sum, item)=>{
    return sum = sum + +item.price
  },0)

    const deleteItem = (key)=>{
      localStorage.removeItem(key);
      props.onSync();
    }
  return (
    <ul>
    {props.items.map((item) => {
      return (
        <li key={item.pid}> 
          <span>{item.pid}</span> 
          <span>{item.pname}</span> 
          <span>${item.price}</span>
          <span><button onClick={()=>{deleteItem(item.key)}}>delete</button></span>
        </li>
      );
    })}
    <h3 key={'total'} className='total'>
          Total amount: ${total} 
        </h3>
  </ul>
  )
}

export default ProductList;