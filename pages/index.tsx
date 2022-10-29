import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import { changeTheme, themeValue } from '../store/themeSlice'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeValue);
  
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
        Personal blog by <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>. I explain with words and code.
        </div>
      </section>
      <main className={styles.main}>
          
      </main>
    </div>
  )
}

export default Home
