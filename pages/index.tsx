import Head from 'next/head'
import Image from 'next/image'
import { getDatabase, ref, child, get } from 'firebase/database'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'
import styles from '../styles/Home.module.css'
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import link from '../assets/link.svg';
import profile from '../assets/profile.jpeg';

interface HomeProps {
  projects: Project[]
}

export async function getServerSideProps() {
  try {
    const db = ref(getDatabase())
    const snapshot = await get(child(db, 'projects'))
    let projects = []

    if (snapshot.exists()) {
      projects = snapshot.val()
    }

    return {
      props: {
        projects
      }
    }
  } catch(error) {
    console.error(error);
  }
}

const Home = (props: HomeProps) => {
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
          <ul className={styles.cards}>
            {
              props.projects.map((project) => {
                return (
                  <li key={project.link}>
                    <ProjectCard
                      name={project.name}
                      description={project.description}
                      technology={project.technology}
                      link={project.link}
                    />
                  </li>
                )
              })
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home
