"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import headerMenu from "./header-data"
import "./header.css"
const Header = () => {
  const headerData = headerMenu;
  const pathname = usePathname();
  const navRef = useRef();
  const [navOpen,setnavOpen] = useState(false);
  const handleNavClick = (e) => {
    setnavOpen(!navOpen);

  }
  console.log(pathname);
  return (
    <header className={(navOpen) ? 'header open' : 'header'}>
        <h3>Next App</h3>
        <button className="mobile-navigation" onClick={(e) => {handleNavClick(e)}}><span></span></button>
        <ul ref={navRef} style={(navOpen) ? {maxHeight:navRef.current.scrollHeight} : {}}>
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
