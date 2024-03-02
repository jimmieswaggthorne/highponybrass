import styles from './FeaturedGuests.module.scss'

const FeaturedGuests = () => {
  return (
    <>
      <div className={styles.mandyn}>
        <div className={styles.rowBody}>
          <h1>Featured Artist - Mandyn E. Mueller (he/they)</h1>
          <p>
            Mueller is so excited to be performing with High Pony Brass.
          </p>
          <p>
            Born and raised in Michigan, he has been an award-winning dancer, performer, and artist his whole life. He graduated from Saginaw Valley State University with a major in theatre and minor in fine art and moved to Chicago in 2013. Since then, he has been involved as a performer in a variety of shows including The Fly Honey Show, Enter The Garden Asheville (North Carolina), the Toy Soldier and ensemble dancer in The Buttcracker: A Nutcracker Burlesque, and as a featured tap dancer and variety performer in multiple Show Pole! shows at the Newport Theater. He had the pleasure of assistant stage managing for Floor Show at the Chopin Theater in Chicago and most recently joined the cast of Comedy Dance Chicago.
          </p>
          <p>See more of Mandyn on their Instagram @mandyn_ellis</p>

        </div>
      </div>
      <div className={styles.graham}>
        <div className={styles.rowBody}>
          <h1>Featured Artist - Graham Hawley (he/him)</h1>
          <p>
            Graham Hawley is ecstatic to be returning to the stage for an all-Ariana Grande show! Graham is a multidisciplinary performer and artist residing in Chicago, IL. He got his start in musical theatre and originally moved to Chicago to pursue musical theatre performance, but after getting involved with nightlife, he knew he wanted to pivot his career and began gogo and backup dancing on the North Halsted strip. Since then he has gogo danced throughout the US and backup danced for queens such as CircuitMOM and Denali Foxx. He has also launched a modeling career and worked with brands such as Wayne Underwear and legendary LGBTQ+ photographer Mark Henderson. If you want to follow his journey, you can check him out on Instagram at @grahawley.
          </p>
        </div>
      </div>
    </>
  )
}

export default FeaturedGuests