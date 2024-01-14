import { InstagramIcon, EmailIcon } from "@/assets/Icons"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="mailto:highponybrass@whimsystiff.com">
        <EmailIcon />
        <span>highponybrass@whimsystiff.com</span>
      </a>
      <a href="https://instagram.com/highponybrass" target="_blank" className='icon-button'>
        <InstagramIcon />
        <span>@highponybrass</span>
      </a>
    </footer>
  )
}

export default Footer