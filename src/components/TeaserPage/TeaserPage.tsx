import styles from './TeaserPage.module.scss'

const TeaserPage = () => {
  return (
    <div className={styles.wrap}>
      <img src="/images/whimsy.png" className={styles.whimsy} alt="Whimsy Stiff-Richards" />
      <img src="/images/whimsy.png" className={`${styles.whimsy} ${styles.right}`} alt="Whimsy Stiff-Richards" />
      <div className={styles.component}>
        <img src="/images/logo-long.png" alt="High Pony Brass Logo" className={styles.logo} />
      </div>
    </div>
  )
}

export default TeaserPage