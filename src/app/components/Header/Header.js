"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import headerMenu from "./header-data"
import "./header.css"
const Header = () => {
  const headerData = headerMenu;
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="header">
        <h3>Next App</h3>
        <ul>
          {
            headerData.map((item) => {
              return <li className={(pathname === item.path) ? 'active' : ''} key={item.label}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            })
          }
        </ul>
    </header>
  )
}

export default Header
