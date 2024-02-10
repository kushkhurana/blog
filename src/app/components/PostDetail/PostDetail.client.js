const PostDetailClient = ({post}) => {
  return (
    <div>
      <h3 className="page-title">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetailClient