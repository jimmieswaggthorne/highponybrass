import { InstagramIcon, EmailIcon } from "@/assets/Icons"
import styles from './Footer.module.scss'
import Link from "next/link"
import { useState } from "react"
import useViewport from "@/hooks/useViewport"
import classNames from "classnames"

const Footer = () => {
  const [open, setOpen] = useState(false)
  const { phone } = useViewport()

  const clickHandler = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  const menuButtonClasses = classNames({ [styles.openMenu]: open })
  return (
    <footer className={styles.footer}>
      {/* <nav> */}
      {/* {phone && <a onClick={clickHandler} className={menuButtonClasses}>{open && 'Close '}Menu</a>}
        {(!phone || open) && <>
          <Link href="/about">About Whimsy Stiff-Richards</Link>
          <Link href="/featured-artists">Featured Artists</Link>
          <Link href="/sponsor-us">Sponsor Us</Link>
        </>} */}

      {/* </nav> */}
      <div>
        <a href="mailto:highponybrass@whimsystiff.com">
          <EmailIcon />
          <span>highponybrass@whimsystiff.com</span>
        </a>
        <a href="https://instagram.com/highponybrass" target="_blank" className='icon-button'>
          <InstagramIcon />
          <span>@highponybrass</span>
        </a>
      </div >
    </footer>

  )
}

export default Footer