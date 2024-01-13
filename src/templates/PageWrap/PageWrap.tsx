
import { useEffect } from "react"

const PageWrap = ({ children }) => {
  return (
    <>
      <header></header>
      <main className='main'>
        <video src="/video/sparkle-bg.mp4"
          autoPlay className="bg-video" loop controls={false} muted={true} poster="/images/bg.png">
        </video>
        {children}
      </main>
      <footer>
      </footer>
    </>
  )
}

export default PageWrap