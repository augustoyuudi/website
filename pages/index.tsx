import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import link from '../assets/link.svg';
import profile from '../assets/profile.jpeg';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Augusto Yuudi Shiraishi</title>
        <meta name="description" content="Augusto's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.main__header}>
          <h1 className={styles.title}>
            Augusto Y. Shiraishi
          </h1>
          <h2 className={styles.subtitle}>Software Engineer at Delivery Much</h2>
          <p className={styles.introduction}>I build high quality frontend solutions for <a href="https://deliverymuch.com.br/" target="_blank" rel="noreferrer">Delivery Much</a>.</p>
          <ul className={styles.socials}>
            <li className={styles.profile}>
              <Image src={profile} alt="Augusto's profile picture" width={48} height={48} />
            </li>
            <li className={styles.social}>
              <a href="https://github.com/augustoyuudi" target="_blank" rel="noreferrer">
                <Image src={githubIcon} alt="Github icon" width={24} height={24} />
                Github
                <Image src={link} alt="Link icon" width={16} height={16} />
              </a>
            </li>
            <li className={styles.social}>
              <a href="https://www.linkedin.com/in/augustoyuudi/" target="_blank" rel="noreferrer">
                <Image src={linkedinIcon} alt="Linkedin icon" width={24} height={24} />
                Linkedin
                <Image src={link} alt="Link icon" width={16} height={16} />
              </a>
            </li>
          </ul>
        </header>
        <section className={styles.main__projects}>
          <h2 className={styles['section-title']}>PROJECTS</h2>
          <div className={styles.cards}>
          <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/potaku"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>Vue.js</p>
                <h3 className={styles.card__title}>potaku</h3>
                <p className={styles.card__description}>Entertainment for otakus. Play games with your favorite animes and mangas.</p>
              </a>
            </article>
            <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/weather-app-ts"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>Typescript</p>
                <h3 className={styles.card__title}>weather-app</h3>
                <p className={styles.card__description}>Node.js API to check best weather conditions for surfing.</p>
              </a>
            </article>
            <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/pokemon-games"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>Vue.js</p>
                <h3 className={styles.card__title}>pokemon-games</h3>
                <p className={styles.card__description}>Vue.js SPA detaiarticleng pokémon games.</p>
              </a>
            </article>
            <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/on-food"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>Next.js</p>
                <h3 className={styles.card__title}>on-food</h3>
                <p className={styles.card__description}>Next.js SSR website to find food recommendations.</p>
              </a>
            </article>
            <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/green-friend"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>React.js</p>
                <h3 className={styles.card__title}>green-friend</h3>
                <p className={styles.card__description}>React.js app to get plants recommendations.</p>
              </a>
            </article>
            <article className={styles.card}>
              <a
                href="https://github.com/augustoyuudi/starwars-pwa"
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.card__subtitle}>Vue.js</p>
                <h3 className={styles.card__title}>starwars-pwa</h3>
                <p className={styles.card__description}>Vue.js PWA consuming Star Wars API.</p>
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
