import React from 'react';
import "./Post.css";
import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
        
          <div className="postInfo">
              <div className="postCats">
              
             </div>
             <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
             </Link>
              
              <hr/>
              <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="postDesc">{post.desc}</p>

            
        </div>
    )
}
