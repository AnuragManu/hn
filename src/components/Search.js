import React, { useState } from 'react'
import '../styles/Search.css'
import { useGlobalCntext } from './Apicontext'


export default function Search() {
const {searchPost} = useGlobalCntext()
const [value, setValue] = useState('')
const handleChange = (event) => {
    event.preventDefault()
    setValue(event.target.value)
}
const handleSubmit = (event) => {
    event.preventDefault();
    searchPost(value);
}

  return (
    <form onSubmit={handleSubmit}>
    <label>
      <input className='input-box' placeholder='Search......' type="text" value={value} onChange={handleChange} />
    </label>
    <input className='button' type="submit" value="Search" />
  </form>
  )
}
