import React from 'react'

const Input = (props) => (
    <input type="input" name={props.val} value={props.val}></input>
)
Input.defaultProps = {
    val: ''
   }
   
export default Input