import React from 'react'
import styles from './page.module.css'
import NewsBlock from '@/components/newsBlock/NewsBlock'

const News = () => {
  const news = [
    {
      id: 1,
      title: "Название 1",
      link: "#",
      imageLink: "/vmss.png"
    },{
      id: 2,
      title: "Название 2",
      link: "#",
      imageLink: "/vmss.png"
    },{
      id: 3,
      title: "Название 3",
      link: "#",
      imageLink: "/vmss.png"
    },{
      id: 4,
      title: "Название 4",
      link: "#",
      imageLink: "/vmss.png"
    },


  ]
  return (
    <div className={styles.container}>
      {news.map((element) => (
        <NewsBlock key={element.id} title={element.title} link={element.link} imageLink={element.imageLink}/>
      ))}
      
      
      
    </div>
  )
}

export default News