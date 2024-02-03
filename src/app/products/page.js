import Products from "../components/Products/Products"

const page = () => {
  return (
    <div className="page-body">
        <h3 className="page-title">Our Products</h3>
        <Products api="https://dummyjson.com/products" />
    </div>
  )
}

export default page
