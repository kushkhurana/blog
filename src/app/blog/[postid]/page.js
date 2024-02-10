import PostDetail from "@/app/components/PostDetail/PostDetail";

const Post = ({params}) => {
  const postId = params.postid;
  return (
    <div className="page-body">
        <PostDetail api={"https://jsonplaceholder.typicode.com/posts/"+postId} />
    </div>
  )
}

export default Post
