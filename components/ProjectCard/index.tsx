import styles from './ProjectCard.module.css'
import type { Project } from '../../types'

const ProjectCard = (props: Project) => {
  return (
    <article className={`${styles.card}`}>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <p className={styles.card__subtitle}>{ props.technology }</p>
        <h3 className={styles.card__title}>{ props.name }</h3>
        <p className={styles.card__description}>{ props.description }</p>
      </a>
    </article>
  )
}

export default ProjectCard