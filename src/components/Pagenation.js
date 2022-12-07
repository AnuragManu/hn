import React from 'react'
import { useGlobalCntext } from './Apicontext'
import '../styles/Pagenation.css'

export default function Pagenation() {
  const {getNextPage , getPrevPage , page , nbPages} = useGlobalCntext();
  return (
    <div className='pagenation--div'><button className='button--pagenation' onClick={()=>getPrevPage()}>Previous</button><p className='Text--pageation'>{`${page+1} of ${nbPages}`}</p><button className='button--pagenation' onClick={()=>getNextPage()}>Next</button></div>
  )
}
