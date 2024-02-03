import LoginNavbar from "../components/loginNavbar";

export default function layout({children}){
    return (
        <>
            <LoginNavbar />
            {children}
        </>
    )
}