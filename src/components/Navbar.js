import React from 'react'
import '../styles/Navbar.css'
import Filter from './Filter'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='navigation--bar'>
        <div className='title'>HACKER NEWS</div>|
        <a className='ref' href="/">New Stories</a>|
        <div className='search_filter'>
            <div><Search/></div>
            <div><Filter/></div>
        </div>
    </nav>
  )
}
