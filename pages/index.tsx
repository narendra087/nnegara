import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Negara Portofolio</title>
      </Head>
      
      <h1 className='text-red-500'>Hi All</h1>
    </div>
  )
}
