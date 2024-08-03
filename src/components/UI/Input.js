import React from "react";
import classes from './Input.module.css'

const Input = React.forwardRef(function Input(props, ref) {
  return (
    <div className={classes.container}>
      <label htmlFor={props.id} className={classes.label}>{props.label}:</label>
      <input type={props.type} id={props.id} onChange={props.onChange} className={classes.input} ref={ref}/>
    </div>
  );
})

export default Input;
