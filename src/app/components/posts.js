"use client"
import { useEffect, useState } from "react";
import "./posts.css";

export default function Posts(props){
  console.log("Posts",props.posts)
  const [posts,setPosts] = useState(props.posts);

  return (
      <div className="posts">
        {
            posts.map((post) => {
                return <div className="post-item" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            })
        }
      </div>
  )
}