import Blog from "../components/blog"

export const metadata = {
  title: "Our Blog",
  description: "You will get daily latest blog on our blog page.",
};

const page = () => {
  return (
    <div className="page-body">
        <h3 className="page-title">Our Blog</h3>   
        <Blog api="https://jsonplaceholder.typicode.com/posts" />
    </div>
  )
}

export default page
