import React from 'react'
import { Link } from 'react-router-dom'

function SinglePost({blog = { }}) {
 
  const {id, title, tags, image ,likes, createdAt ,isSaved} = blog
  
  const tag = tags?.map(tag => <span>#{tag},</span>)
  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle"> {title}</Link>
        <div className="lws-tags">
          {tag}
          </div>

        
        <div className="flex gap-2 mt-4">
          <span className={isSaved ? "lws-badge" : ''}>{isSaved ? 'Saved' : ' '}</span>
        </div>
       
      </div>
    </div>
  )
}

export default SinglePost