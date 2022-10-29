import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { postData, PostData } from '../../store/postDataStore';
import { useAppSelector } from '../../store/storeHooks';
import styles from "../../styles/post-page.module.scss";
const Post = () => {
  const router = useRouter()
  const { title } = router.query;
  const postDataList = useAppSelector(postData);
  const [data,setData] = useState<PostData>();
  const [convertedTitle,setConvertedTitle] = useState(title?.toString().replaceAll("-"," "))
  useEffect(()=>{
    const result = postDataList.find(item=>item.title === convertedTitle);
    setData(result)
  },[title])

  return <div className={styles.container}>
    <h1>{convertedTitle}</h1>
    <div className={styles.info}>
            <p>{data?.date.toDateString()}</p>
            <p>{data?.readingTime} min Read</p>
        </div>
    <p>
      {data?.text}
    </p>
  </div>
}

export default Post