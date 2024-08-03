import React, { useRef } from "react";
import Input from "./UI/Input";
import classes from "./InputProduct.module.css";

function InputProduct(props) {
  const pidRef = useRef();
  const pnameRef = useRef();
  const priceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      pidRef.current.value.trim() === "" ||
      pnameRef.current.value.trim() === "" ||
      priceRef.current.value.trim() === ""
    ) {
      return; 
    }
    const productDetails = {
      pid: pidRef.current.value,
      pname: pnameRef.current.value,
      price: priceRef.current.value,
    };

    props.onSaveProduct(productDetails);
    console.log(productDetails);
    pidRef.current.value = "";
    pnameRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <Input type="number" label="Product Id" id="pid" ref={pidRef} />
      <Input type="text" label="Product Name" id="pname" ref={pnameRef} />
      <Input type="number" label="Selling Price" id="price" ref={priceRef} />
      <button className={classes.button}>Add Product</button>
    </form>
  );
}

export default InputProduct;
