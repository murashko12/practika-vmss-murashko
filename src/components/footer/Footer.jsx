import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
      
      
      <Link href={"https://mpei.ru/Structure/Universe/avti/structure/cmsan/Pages/default.aspx"} target="_blank">
        ©2023 НИУ «МЭИ» кафедра ВМСС
      </Link>
      
      <div className={styles.containerImg}>
        <Link href={"https://mpei.ru/Pages/default.aspx"} target="_blank">
          <Image
            src="/mpeiLogo.png"
            width={220}
            height={60}
            alt="MPEI"
          />  
        </Link>      
      </div>
    </footer>
  )
}

export default Footer
