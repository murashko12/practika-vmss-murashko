import React from 'react'
import styles from './page.module.css'
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import Link from 'next/link'

BsArrowRightCircleFill
const Instruments = () => {
  return (
    <div className={styles.container}>

      <div className={styles.blockPoints}>
        
        <h1>Виды инергии</h1>
        <div className={styles.containerPoints}>
          <Link href={`/instruments/mechanical`}><div className={styles.point}><h2>Механическая</h2></div></Link>
          <Link href={`/instruments/thermal`}><div className={styles.point}><h2>Тепловая</h2></div></Link>
          <Link href={`/instruments/electric`}><div className={styles.point}><h2>Электрическая</h2></div></Link>
          <Link href={`/instruments/light`}><div className={styles.point}><h2>Световая</h2></div></Link>
          <Link href={`/instruments/nuclear`}><div className={styles.point}><h2>Ядерная</h2></div></Link>
        </div>
      </div>

      <div className={styles.blockInfo}>
        
        <h1>Источники энергии</h1>
        <div className={styles.containerPoints}>
          <Link href={`/instruments/renewable`}><div className={styles.point}><h2>Возобновляемые</h2></div></Link>
          <Link href={`/instruments/non-renewable`}><div className={styles.point}><h2>Невозобновляемые</h2></div></Link>
        </div>
      </div>

    </div>
  )
}

export default Instruments
