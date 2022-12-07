import React from 'react'
import { useGlobalCntext } from '../components/Apicontext'
import Comment from '../components/Comment'
import Stories from '../components/Stories'
import '../styles/screen.css'

export default function Newstoriesscreen() {
    const {hits}= useGlobalCntext()
    
  return (
<div className='divs'>{hits.map((e)=>{return e._tags[0]==='comment'?<Comment  key={`${e.story_url}${e.created_at}`} author = {e.author} story_title={e.story_title} story_url={e.story_url} comment_text={e.comment_text} points = {e.points} created_at={e.created_at}/>:<Stories key={`${e.title}${e.created_at}`} author = {e.author} title={e.title} url={e.url} points = {e.points} created_at={e.created_at}/>})}
</div>
  )
}
