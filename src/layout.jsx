import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from 'react-router-dom'; 

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
};