import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { useRouter } from "next/router"

const PageWrap = ({ children }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname !== '/' &&
        <Header />
      }
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageWrap