import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "Главное",
        url: "/"
    },{
        id: 2,
        title: "О нас",
        url: "/about"
    },{
        id: 3,
        title: "Новости",
        url: "/news"
    },{
        id: 4,
        title: "Инструменты",
        url: "/instruments"
    }

]

const Navbar = () => {
    return (
        <header className={styles.container}>
            <Link href="/" className={styles.logo}>LOGO</Link>
            <nav className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}
            </nav>
        </header>
    )
}

export default Navbar
