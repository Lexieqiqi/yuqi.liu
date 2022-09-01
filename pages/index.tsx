import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <div className={styles.head}>
          <div>
            <Link href="/">
              <span className={styles.logo}>Yuqi Liu</span>
            </Link>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a>Story</a>
              </li>
              <li>|</li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link href="/gallery">
                  <a>Gallery</a>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.media}>
            <ul>
              <li>
                <a href="">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="https://m.youtube.com/channel/UCFVnh0qsdNFHUTi1VtgOjcA">
                  <AiOutlineYoutube />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yuqi-liu-158b17193/">
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Head>

      <main className={styles.main}>
        <div className={styles.intro_pic_container}>
          <div className={styles.intro_pic}>
            <Image
              src="/intro_pic/bus_2.jpeg"
              alt="my story"
              className={styles.ip}
              width={700}
              height={600}
              layout="fixed"
            />
          </div>
        </div>

        <div className={styles.sliding_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="50"
            viewBox="0 0 600 50"
            preserveAspectRatio="xMinYMin"
            className="slide"
          >
            <rect
              className={styles.box}
              x="135"
              y="15"
              width="30"
              height="30"
              rx="15"
            ></rect>
            <circle cx="150" cy="30" r="10">
              <a className=""></a>
            </circle>
            <rect
              className={styles.box}
              x="235"
              y="15"
              width="30"
              height="30"
              rx="15"
            ></rect>
            <circle cx="250" cy="30" r="10"></circle>
            <rect
              className={styles.box}
              x="335"
              y="15"
              width="30"
              height="30"
              rx="15"
            ></rect>
            <circle cx="350" cy="30" r="10"></circle>
            <rect
              className={styles.box}
              x="435"
              y="15"
              width="30"
              height="30"
              rx="15"
            ></rect>
            <circle cx="450" cy="30" r="10"></circle>
          </svg>
        </div>

        <div className={styles.introduction}>
          <p>
            Hi, Nice to meet you here.
            <br /> I’m Yuqi Liu, currently a master student in KTH. I’m a
            software enginner and UX/UI designer.
            <br />
            Currently📍located in Beijing, China, from Wuhan, China.
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Here presents my previous projects information</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>I write sometimes to express my thoughts.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Story &rarr;</h2>
            <p>
              Here are some interesting stories that I have encountered on the
              road.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Gallery &rarr;</h2>
            <p>
              I present some of the beautiful photos that I have captured on the
              road.
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
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
