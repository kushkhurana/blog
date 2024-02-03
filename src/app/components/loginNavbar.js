"use client"
import "./loginNavbar.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LoginNavbar = () => {
    const pathName = usePathname();
  return (
    <div>
        {pathName !== "/login/teacherlogin" ?
        <ul className="login-navbar">
            <li><Link href="/login/studentlogin">Student Login</Link></li>
            <li><Link href="/login/teacherlogin">Teacher Login</Link></li>
            <li><Link href="/login">Admin Login</Link></li>
        </ul>
        :
        null
        }
    </div>
  )
}

export default LoginNavbar