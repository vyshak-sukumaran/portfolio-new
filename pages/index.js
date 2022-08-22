import Head from 'next/head'
import { useRouter } from 'next/router'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Landing from '../components/home/Landing'
import Navbar from '../components/nav/Navbar'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import styles from '../styles/Index.module.css'
import GitIcon from '../assets/git.svg'
import TwitterIcon from '../assets/twitter.svg'
import InIcon from '../assets/in.svg'

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

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <footer className="w-full h-24 bg-secondary flex justify-center">
        <ul className='list-none w-80 flex items-center text-white justify-between'>
          <li>
            <GitIcon className="w-6 h-6" />
          </li>
          <li>
            <TwitterIcon className="w-6 h-6" />
          </li>
          <li>
            <InIcon className="w-6 h-6" />
          </li>
        </ul>
      </footer>
    </div>




  )
}
