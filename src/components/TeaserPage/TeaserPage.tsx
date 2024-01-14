import { InstagramIcon } from '@/assets/Icons'
import styles from './TeaserPage.module.scss'

const TeaserPage = () => {
  return (
    <div className={styles.wrap}>
      <video src="/video/sparkle-bg.mp4"
        autoPlay className={styles.bgVideo} loop controls={false} muted={true} poster="/images/bg.png">
      </video>
      <div className={styles.component}>
        <img src="/images/logo-long.png" alt="High Pony Brass Logo" className={styles.logo} />
      </div>
      <img src="/images/whimsy.png" className={styles.whimsy} alt="Whimsy Stiff-Richards" />
      <img src="/images/whimsy.png" className={`${styles.whimsy} ${styles.right}`} alt="Whimsy Stiff-Richards" />
    </div>
  )
}

export default TeaserPage