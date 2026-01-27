import { useEffect, useState } from "react"
import Bio from "./components/Bio"
import Contact from "./components/Contact"
import Description from "./components/Description"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListProject from "./components/ListProject"
import { Toaster } from 'sonner'
import Loader from "./components/Loader"


function App() {

    const [loader,setLoader] = useState(true);
  
   
    useEffect( () => {
       
        const timer = setTimeout( () => setLoader(false),2000); 
 
         return () => {
               clearTimeout(timer);
         }
    
     },[])


  


  return (

    
    <>

       {loader && <Loader/> }

       <Toaster position="top-right" richColors />

       <Header/>
       
       <main className="bg-black">

           
                <Bio/>

              <section className="mt-[100vh] relative scroll-mt-70" id="two">
                    
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
