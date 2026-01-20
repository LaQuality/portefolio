import profil from "../../public/avatar2.png"

export default function Bio() {
  return (
    
       <section className="flex justify-center flex-col md:flex-row h-svh  w-screen md:items-center md:justify-center bg-black text-white fixed top-0 bottom-0 -z-1">


             {/* <img className=" md:mt-0 opacity-70 absolute -bottom-6 -right-[5vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" /> */}
             
             
             <img className=" md:mt-0 opacity-45 absolute -bottom-15 -right-[20vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" />
             
             <img className=" md:mt-0 absolute -bottom-12 -right-[40vw] md:-right-[22vw]  lg:-right-[15vw]" src={profil} alt="mon profil" />

               

             <h1 className="font-black text-5xl ml-3 md:text-7xl md:ml-5 z-9 ">
                
                I'm <span className="text-orange-500">Kiko</span> 
                  <br />
                Developpeur Frontend et Concepteur de système d'information 
            </h1> 

            {/* <div className="bg-black opacity-70 w-full h-full absolute top-0 right-0 ">

            </div> */}

            {/* <div className="bg-orange-500 absolute h-1 bottom-0 left-0 w-[40vw] lg:w-[90vw]"></div> */}
             


       </section>


  )
}
