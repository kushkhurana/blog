import Products from "../components/Products/Products"

export const metadata = {
    title: "Our Products",
    description: "Explore our different products with categories.",
};

const page = () => {
  return (
    <div className="page-body">
        <h3 className="page-title">Our Products</h3>
        <Products api="https://dummyjson.com/products" />
    </div>
  )
}

export default page
