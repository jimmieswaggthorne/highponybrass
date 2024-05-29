import styles from './Sponsors.module.scss'

const Sponsors = () => {

  return (
    <div className={styles.body}>
      <div className={styles.wrap}>
        <h2>Sponsored by</h2>
        <div className={styles.sponsorWraps}>
          <div className={styles.logo}>
            <a href="https://www.genitophoto.com/" target="_blank">
              <img src="/images/genito.png" />
            </a>
            <a href="https://queercoded.events/" target="_blank">
              <img src="/images/qc-logo.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sponsors