import React from 'react'
import styles from './newsblock.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NewsBlock = ({title,link,imageLink}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    // className={im}
                    src={imageLink}
                    width={200}
                    height={200}
                    alt="newsImg"
                />   
            </div>
            <div className={styles.titleBlock}>
                <h1>{title}</h1>
                <Link href={"#"}>
                    <div className={styles.learnMore}>Узнать больше</div>
                </Link>
            </div>
        </div>
    )
}

export default NewsBlock
    