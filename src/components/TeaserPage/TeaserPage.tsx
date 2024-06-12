import { InstagramIcon } from '@/assets/Icons'
import styles from './TeaserPage.module.scss'
import { useState } from 'react'

const TeaserPage = () => {
  const [ended, setEnded] = useState(false)
  return (
    <div className={styles.wrap}>
      {!ended ? <video src="/video/promo-video.mp4"
        autoPlay className={styles.bgVideoPromo} controls={false} muted={true} poster="/images/bg.png" onEnded={() => { setEnded(true) }}>
      </video> :
        <video src="/video/sparkle-bg.mp4"
          autoPlay className={styles.bgVideo} loop controls={false} muted={true} poster="/images/bg.png">
        </video>
      }
      <div className={styles.component}>
        <img src="/images/full-logo.png" alt="High Pony Brass Logo" className={styles.logo} />
      </div>

    </div>
  )
}

export default TeaserPage