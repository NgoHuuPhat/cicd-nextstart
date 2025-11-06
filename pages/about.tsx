import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Our Project</h1>

        <p className={styles.description}>
          This is a fun demo page showing how to create a new page in Next.js.
        </p>

        <div className={styles.links}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Next.js Docs &rarr;</h3>
            <p>Check the official documentation for more features.</p>
          </a>
          <a href="https://vercel.com" className={styles.card}>
            <h3>Vercel &rarr;</h3>
            <p>Learn more about deploying Next.js projects easily.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Created with ❤️ using Next.js
      </footer>
    </div>
  );
}
