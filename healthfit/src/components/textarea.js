import React from "react";

const TextArea = (props) => {

  return(
    <div>
      <label 
        htmlFor={props.name}
        className={props.labelClass}
        >
        {props.title}
      </label>
      <br />
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.inputChange}
        className={props.class}
        rows={10}
        />
    </div>
  )
}

export default TextArea;