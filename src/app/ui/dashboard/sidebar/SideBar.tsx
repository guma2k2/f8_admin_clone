import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'

import { SidebarData } from '@/app/lib/data/SidebarData'
import SubMenu from './SubMenu/SubMenu'

function SideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={'/f8.png'} width={50} height={50} alt='F8 logo' />
            </div>
            <div className={styles.wrapper}>
                {
                    SidebarData.map((item, index) => {
                        return <SubMenu key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default SideBar