import React, { useState } from 'react'
import Form from './components/Form';
import axios from "axios"

const App = () => {
  const [cookieval, setCookieVal] = useState('');

  const handleClick = async() => {
    const response = await axios.get('http://localhost:3000/api/getcookie', {withCredentials:true});
    setCookieVal(response.data.cval);
    // console.log(response);
  }
  return (
    <>
    <h1>Cookie Test</h1>
    <Form />
    <button onClick={handleClick}>Retrieve Cookie</button>
    <p>Cookie value is: {cookieval}</p>
    </>
  )
}

export default App