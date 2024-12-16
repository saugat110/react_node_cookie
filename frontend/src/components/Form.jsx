import React, { useRef } from 'react'
import axios from "axios"

const Form = () => {
  const cookievaluefield = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response  = await axios.post('http://localhost:3000/api/setcookie', 
      {token:cookievaluefield.current.value},
      {withCredentials:true})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={cookievaluefield}/><br /><br />
        <button>Set Cookie</button><br /><br />
      </form>
    </>
  )
}

export default Form