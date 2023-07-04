import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io';

const page = () => {
  return (
    <div>
      <Link  href={`/instruments`}><div className={styles.backBtn}><IoMdArrowRoundBack /></div></Link>
      Возобновляемые
    </div>
  )
}

export default page
