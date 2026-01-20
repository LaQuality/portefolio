import Bio from "./components/Bio"
import Contact from "./components/Contact"
import Description from "./components/Description"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListProject from "./components/ListProject"
import { Toaster } from 'sonner'


function App() {


  return (
    <>

       <Toaster position="top-right" richColors />

       <Header/>
       
       <main className="bg-black">

           
                <Bio/>

              <section className="mt-[100vh] ombreB relative">

                     
                      <Description/>

                      <ListProject/>

                    
                      
                          <Contact/>

                          <Footer/>
                      
                     
                              

              </section>

            

       </main>

      
      
  

    </>
  )
}

export default App
