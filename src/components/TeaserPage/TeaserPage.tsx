import { InstagramIcon } from '@/assets/Icons'
import styles from './TeaserPage.module.scss'

const TeaserPage = () => {
  return (
    <div className={styles.wrap}>
      <a href="https://instagram.com/highponybrass" target="_blank" className='icon-button'>
        <InstagramIcon />
      </a>
      <img src="/images/whimsy.png" className={styles.whimsy} alt="Whimsy Stiff-Richards" />
      <img src="/images/whimsy.png" className={`${styles.whimsy} ${styles.right}`} alt="Whimsy Stiff-Richards" />
      <div className={styles.component}>
        <img src="/images/logo-long.png" alt="High Pony Brass Logo" className={styles.logo} />
      </div>
    </div>
  )
}

export default TeaserPage