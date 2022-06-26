import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { AiOutlineInstagram, AiOutlineYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <div className={styles.head}>
            <div>
                <Link href={{pathname: "/", query: { name: 'test' }}}><span className={styles.logo}>Yuqi Liu</span></Link>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a>Story</a></li>
                    <li>|</li>
                    <li><a>Blog</a></li>
                    <li>|</li>
                    <li><a>Projects</a></li>
                    <li>|</li>
                    <li><a>Gallery</a></li>
                    <li>|</li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className={styles.media}>
                <ul>
                    <li><a href=""><AiOutlineInstagram /></a></li>
                    <li><a href="https://m.youtube.com/channel/UCFVnh0qsdNFHUTi1VtgOjcA"><AiOutlineYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/yuqi-liu-158b17193/"><AiFillLinkedin /></a></li>
                </ul>
            </div>
        </div>
      </Head>

      <main className={styles.main}>
        <div className={styles.intro_pic_container}>
            <div className={styles.intro_pic}>
                <Image src="/intro_pic/bus_2.jpeg" 
                        alt="my story"
                        className={styles.ip}
                        width={500}
                        height={450} 
                        layout="fixed"/>
            </div>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my wonderland!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Story &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Gallery &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
