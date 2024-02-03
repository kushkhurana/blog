"use client"
import "./product.css"
import { useState } from "react";

const Product = (props) => {
    const [products,setProducts] = useState(props.data.products);
  return (
    <div className="products">
        {
            products.map((product) => {
                return <div className="item" key={product.id}>
                    <div className="image">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>

                </div>
            })
        }
    </div>
  )
}

export default Product
