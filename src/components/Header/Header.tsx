import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrap}>
      {/* <video src="/video/sparkle-bg.mp4"
        autoPlay className={styles.bgVideo} loop controls={false} muted={true} poster="/images/bg.png">
      </video> */}
      <video src="/video/promo-reel.mp4"
        autoPlay className={styles.bgVideo} loop controls={false} muted={true} poster="/images/bg.png">
      </video>
      <a href="/" className={styles.component}>
        <img src="/images/full-logo.png" alt="High Pony Brass Logo" className={styles.logo} />
      </a>
    </header>
  )
}

export default Header