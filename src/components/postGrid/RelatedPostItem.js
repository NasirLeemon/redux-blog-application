import React from "react";
import { Link } from "react-router-dom";

function RelatedPostItem({blog}){

  const {id, title, tags, image,createdAt } = blog || {};
  const tag = tags?.map((tag) => <span>#{tag},</span>);



    return(
        
        <div class="space-y-4 related-post-container">
          <div class="card">
            <Link to={`/blogs/${id}`}>
              <img src={image} class="card-image" alt={title} />
            </Link>
            <div class="p-4">
              <Link Link to={`/blogs/${id}`} class="text-lg post-title lws-RelatedPostTitle">
                {title}
              </Link>
              <div class="mb-0 tags">
               {tag}
              </div>
              <p>{createdAt}</p>
            </div>
          </div>
        </div>
      
    )
}

export default RelatedPostItem