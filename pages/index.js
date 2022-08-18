import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Landing from '../components/home/Landing'
import Navbar from '../components/nav/Navbar'
import styles from '../styles/Index.module.css'

export default function Home() {
  const router = useRouter()
  const meta = {
    title: "Vyshak Sukumaran",
    description: "I have been developing web applications for almost 2 years",
    image: "/vercel.svg",
    type: "website",
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://vyshaksukumaran.online${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://vyshaksukumaran.online${router.asPath}`}
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VyshakS2000" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        
      </Head>

      <main>
        <Navbar />

        
        <Landing />
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>




  )
}
