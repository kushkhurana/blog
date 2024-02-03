import Product from "./Product";

const Products = async ({api}) => {
    let res = await fetch(`${api}`,{
        cache: 'no-store'
    });
    let data = await res.json();
  return (
    <div>
        <Product data={data} />
    </div>
  )
}

export default Products
