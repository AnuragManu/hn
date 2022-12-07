import React from 'react'
import '../styles/Comment.css'
export default function Comment(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{`Comment on ${props.story_title} by ${props.author}`}</p>
        <a className='link--style' href={props.story_url}>( Link To Story )</a>
      <p className="styleLocationLabel">{props.comment_text}</p>
      <h6>Created at {props.created_at}</h6>
      <h6>Points : {props.points}</h6>
    </div>
  )
}
 