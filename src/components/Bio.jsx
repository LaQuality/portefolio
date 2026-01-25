import { FaArrowDown } from "react-icons/fa6";


export default function Bio() {
  return (
      <>
    
       <section className="flex justify-center flex-col md:flex-row h-dvh  w-screen md:items-center md:justify-start bg-black text-white ombreT fixed top-0 bottom-0 -z-1">


             
             
             {/* <img className=" md:mt-0 opacity-45 absolute -bottom-15 -right-[20vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" />
             
             <img className=" md:mt-0 absolute -bottom-12 -right-[40vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" /> */}

                <model-viewer 
                src="https://laquality.github.io/portefolio/macbook.glb"
                alt="Une voiture noire en 3D"
                class="h-screen w-screen   absolute -bottom-[35vh] -right-[10vh] md:bottom-0 md:-right-[50vh]  "
                camera-controls="false"
                autoplay
                > 
               </model-viewer>

             <h1 className="font-black text-5xl ml-3 md:text-7xl md:ml-8 md:w-[60vw] ">
                
                I'm <span className="text-orange-500">Kiko</span> 
                  <br />
                Developpeur Frontend et Concepteur de système d'information 
            </h1> 

           
             <div className="absolute bottom-5 left-0 w-full flex flex-col items-center ">

                      <a className="bg-orange-500 p-4 cursor-pointer rounded-full  font-bold z-20 " href="#two"><FaArrowDown /></a>
                          
             </div>

       </section>



   </>
 
  )
}
