"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './SubMenu.module.css'

type MenuItem = {
    title: string;
    path: string;
    icon: React.ReactNode;
    iconClosed?: React.ReactNode;
    iconOpened?: React.ReactNode;
    subNav?: MenuItem[];
    cName?: string;
};

type SubMenuProps = {
    item: MenuItem;
};
function SubMenu({ item }: SubMenuProps) {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <Link href={item.path} onClick={item.subNav && showSubnav} className={styles.SidebarLink} >
                <div>
                    {item.icon}
                    <span className={styles.title} >{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            {subnav && item.subNav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link href={item.path} key={index} className={styles.DropdownLink} >
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
        </>
    )
}

export default SubMenu