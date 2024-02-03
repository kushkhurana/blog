import Link from "next/link"
import "./header.css"
const Header = () => {
  return (
    <header className="header">
        <h3>Next App</h3>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
        </ul>
    </header>
  )
}

export default Header
