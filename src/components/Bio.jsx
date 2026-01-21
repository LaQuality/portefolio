import profil from "../../public/avatar2.png"

export default function Bio() {
  return (
      <>
    
       <section className="flex justify-center flex-col md:flex-row h-dvh  w-screen md:items-center md:justify-center bg-black text-white ombreT fixed top-0 bottom-0 -z-1">


             
             
             <img className=" md:mt-0 opacity-45 absolute -bottom-15 -right-[20vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" />
             
             <img className=" md:mt-0 absolute -bottom-12 -right-[40vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" />

               

             <h1 className="font-black text-5xl ml-3 md:text-7xl md:ml-5 z-9 ">
                
                I'm <span className="text-orange-500">Kiko</span> 
                  <br />
                Developpeur Frontend et Concepteur de système d'information 
            </h1> 

                

       </section>



   </>
 
  )
}
