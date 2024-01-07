import { ReactNode } from "react"
import styles from '../ui/dashboard/dashboard.module.css'
import Sidebar from "../ui/dashboard/sidebar/SideBar"
import Navbar from "../ui/dashboard/navbar/NavBar"
import Footer from "../ui/dashboard/footer/Footer"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout