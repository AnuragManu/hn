import React from 'react'
import '../styles/Stories.css'
export default function Stories(props) {
  return (
    <div className="styleCardContent--story">
    <p className="styleCardTitle--story">{`${props.title} by ${props.author}`}</p>
      <a className='link--style--story' href={props.url}>( Link To Story )</a>
      <h6>Created at {props.created_at}</h6>
      <h6>Points : {props.points}</h6>
  </div>
  )
}
