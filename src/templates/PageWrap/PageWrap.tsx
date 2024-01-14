import Footer from "@/components/Footer/Footer"

const PageWrap = ({ children }) => {
  return (
    <>
      <header></header>
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageWrap