"use client"
import Link from "next/link";
import { useState } from "react";
import "./posts.css";

export default function Posts(props){
  // console.log("Posts",props.posts)
  const [posts,setPosts] = useState(props.posts);

  return (
      <div className="posts">
        {
            posts.map((post) => {
                return <div className="post-item" key={post.id}>
                    <h3><Link href={"/blog/"+post.id}>{post.title}</Link></h3>
                    <p>{post.body}</p>
                </div>
            })
        }
      </div>
  )
}