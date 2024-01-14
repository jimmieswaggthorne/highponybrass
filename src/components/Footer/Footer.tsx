import { InstagramIcon } from "@/assets/Icons"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://instagram.com/highponybrass" target="_blank" className='icon-button'>
        <InstagramIcon />
      </a>
    </footer>
  )
}

export default Footer