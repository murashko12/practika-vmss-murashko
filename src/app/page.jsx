import Image from 'next/image'
import styles from './page.module.css'
// import { Application } from '@splinetool/runtime';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>[ЛОГОТИП]</h1>
      </div>
      <h1>[НАЗВАНИЕ (и доп. информация)]</h1>
    </div>
  )
}
