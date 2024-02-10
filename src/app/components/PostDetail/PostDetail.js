import PostDetailClient from "./PostDetail.client";

const PostDetail = async ({api}) => {
    let res = await fetch(`${api}`,{
        cache: 'no-store'
    });
    let data = await res.json();
  return (
    <div>
      <PostDetailClient post={data} />
    </div>
  )
}

export default PostDetail