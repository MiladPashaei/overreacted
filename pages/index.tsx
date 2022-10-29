import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import PostCard from '../components/postCard/PostCard'
import { postService } from '../services/postService'
import { postData, PostData, setData } from '../store/postDataStore'
import {  useAppDispatch, useAppSelector } from '../store/storeHooks'
import { changeTheme, themeValue } from '../store/themeSlice'
import styles from '../styles/Home.module.css'
import { PostDate } from '../utils/customDate'
import { readingTime } from '../utils/readingTimeEstimate'

const Home: NextPage = () => {
  const theme = useAppSelector(themeValue);
  const {getPosts} = postService();
  const dispatch= useAppDispatch();
  const postDataList = useAppSelector(postData);

  const getData = async () =>{
    try {
      const result = await getPosts();
      const newData : PostData[] = result.map((item)=>{
        return {
          date: new PostDate(`December 8,1996`).addDays(item.id),
          readingTime:readingTime(item.body),
          title:item.title,
          summary:item.title.split('\n')[0],
          text:item.body,
          url:item.title.replaceAll(" ","-"),
          id:item.id
        }
      })
      /* because date is ascending by default,sorting by date is not required,
        we could use quick sort algorithm or Array.sort() if it was neccessary
      */
      const sortedData = newData.sort((a,b)=> {
        if(a.date < b.date) return 1
        if(a.date > b.date) return -1
        return 0
      })
      dispatch(setData(sortedData))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
    
  },[])

  return (
    <div className={styles[theme]}>
      <Head>
        <title>Overreacted - A blog by Dan Abramov</title>
        <meta name="description" content="A blog by Dan Abramov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles["profile"]}>
        <Image
        width={40}
        height={40}
          alt="profile"
          src="/profile-pic.jpg"
          style={{borderRadius:"50%"}}
        />
        <div className={styles["profile-text"]}>
          <p>
             Personal blog by <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>.
          </p>
          <p>
            I explain with words and code.
          </p>
        </div>
      </section>
      <main className={styles.main}>
          {postDataList.map(item=>{
            return <PostCard key={item.id} 
              item={item}
            />
          })}
      </main>
    </div>
  )
}

export default Home
