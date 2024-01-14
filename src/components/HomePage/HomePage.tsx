import TeaserPage from '../TeaserPage/TeaserPage'
import styles from './HomePage.module.scss'

const HomePage = () => {

  return (
    <div className={styles.body}>
      <TeaserPage />
      <div className={styles.pinkRow}>
        <div className={styles.rowBody}>
          <h1>About</h1>
          <p>
            High Pony Brass is a high energy, high camp, and high production cover concert celebrating the music of the Pop & R&B princess herself, Ariana Grande.
          </p>
          <p>
            Led by Berklee College of Music graduate and Drag Personality Whimsy Stiff-Richards, High Pony Brass takes you on a journey through your favorite high-pony heroine's repetoire with a unique twist; In place of Ari's signature whistle tones are the musing melodies of over 9 different instruments played by Whimsy themself!
          </p>
          <p>
            What would a concert built for a pop princess be without an ensemble? Enjoy backup dancing and unique interactive opportunities with Whimsy's signature Bunnys! Don't forget our featured fan favorites on Ari's hot tracks like Iggy Azalea and Nathan Sykes! Enjoy guest collaborators playing their own instruments!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage