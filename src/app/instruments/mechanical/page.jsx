import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io';

const page = () => {
  return (
    <div className={styles.container}>
      <Link  href={`/instruments`}><div className={styles.backBtn}><IoMdArrowRoundBack /></div></Link>
      <div className={styles.documentation}>
        <h1>Механическая энергия</h1>
        <br />
        <br />
        <p>Механическая – требуется для физических манипуляций с материалами. К ним относятся:
          <br />
          <br />
            <ul>
              <li>центрифугирование</li>
              <li>дробление</li>
              <li>перемещение и прочее.</li>
            </ul> 
        </p>
      </div>
      <div className={styles.toolContainer}>
        <div className={styles.tools}><h2>[ГРАФИКИ]</h2></div>
        <div className={styles.tools}><h2>[ЗНАЧЕНИЯ И ПЕРЕМЕННЫЕ]</h2></div>
      </div>
    </div>
  )
}

export default page
