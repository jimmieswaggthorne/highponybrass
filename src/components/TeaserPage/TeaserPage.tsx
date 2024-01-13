import styles from './TeaserPage.module.scss'

const TeaserPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.component}>
        <img src="/images/logo-long.png" alt="High Pony Brass Logo" className={styles.logo} />
      </div>
    </div>
  )
}

export default TeaserPage