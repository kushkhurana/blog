import Posts from "../components/posts.js";
const Blog = async ({api}) => {
  let res = await fetch(`${api}`,{
        cache: 'no-store'
    });
  let data = await res.json();
  return (
    <div>
      <Posts posts={data} />
    </div>
  )
}

export default Blog
