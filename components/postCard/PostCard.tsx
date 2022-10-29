import Link from 'next/link';
import React from 'react'
import styles from "./styles/post-card.module.scss"

interface PostCardProps {
    item : {
        title:string;
        date:Date;
        url:string;
        summary:string;
        readingTime:string;
    };
}

export default function PostCard({item}:PostCardProps) {
  return (
    <div className={styles.container}>
        <Link href={item.url}><h3>{item.title}</h3></Link>
        <div className={styles.info}>
            <p>{item.date.toDateString()}</p>
            <p>{item.readingTime} min Read</p>
        </div>
        <p>{item.title}</p>
    </div>
  )
}
