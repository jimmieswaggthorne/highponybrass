import styles from './ShowList.module.scss'

const ShowList = () => {
  return (
    <div className={styles.wrap}>
      <img src="/images/whimsy.png" className={styles.whimsy} alt="Whimsy Stiff-Richards" />
      <img src="/images/whimsy.png" className={`${styles.whimsy} ${styles.right}`} alt="Whimsy Stiff-Richards" />

      <div className={styles.body}>
        <h2>Upcoming Shows</h2>
        <p>We are excited to be kicking this show off local to Chicago before expanding to other cities in the midwest! Check out some of the dates we currently have planned below.</p>
        <ul className={styles.list}>
          <li>
            <a href="https://ticketscandy.com/e/high-pony-brass-4438" target="_blank">
              <div className={styles.show}>
                <div className={styles.location}>
                  <h3>Three Brothers Theatre</h3>
                </div>
                <div className={styles.city}>
                  Waukegan, IL
                </div>
                <div className={styles.date}>
                  April 13th at 7:00PM <span className={styles.highlight}>All Ages Welcome!</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.eventbrite.com/e/high-pony-brass-tickets-863313202027" target="_blank">
              <div className={styles.show}>
                <div className={styles.location}>
                  <h3>Newport Theater</h3>
                </div>
                <div className={styles.city}>
                  Chicago, IL
                </div>
                <div className={styles.date}>
                  June 22nd at 9:30PM
                </div>
              </div>
            </a>
          </li>
          <li>
            <div className={styles.show}>
              <div className={styles.location}>
                <h3>The Baton Show Lounge</h3>
              </div>
              <div className={styles.city}>
                Chicago, IL
              </div>
              <div className={styles.date}>
                April 26th at 7PM <span className={styles.highlight}>Celebrate Ariana Grande's Birthday!</span>
              </div>
            </div>
          </li>
        </ul>
        <p>Subscribe to notifications for updates on new show dates!
          <br />
          <br />
          Looking to get your city added to the lineup? Email us at <a href="mailto:highponybrass@whimsystiff.com">highponybrass@whimsystiff.com</a> with your city and/or venue suggestions!</p>
      </div>
    </div >
  )
}

export default ShowList
