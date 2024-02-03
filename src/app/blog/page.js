import Blog from "../components/blog"

const page = () => {
  return (
    <div className="page-body">
        <h3 className="page-title">Our Blog</h3>   
        <Blog api="https://jsonplaceholder.typicode.com/posts" />
    </div>
  )
}

export default page
