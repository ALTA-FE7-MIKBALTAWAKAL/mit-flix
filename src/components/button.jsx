import React from "react";

const Button = ({onClick, type, label}) => {
    return(
        <button className="btn" onClick={onClick} type={type}>{label}</button>
    )
}

export default Button