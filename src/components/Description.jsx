import avatar from "../../public/me.png"
import Skills from "./Skills"


export default function Description() {
  return (

    <>
    <div className='h-screen text-white   relative '>
        <div className='flex justify-center items-end flex-col text-end mr-4 md:mr-8 '>

        
            <h2 className='text-4xl md:text-6xl font-bold mt-20'>Qui <span className="text-orange-500">suis</span>-je ? </h2>
            
            <p className="text-md max-w-[90%] ">Passionné par l’informatique, l’apprentissage et la créativité, je suis titulaire d’un Master en Conception des Systèmes d’Information obtenu à l’UCC.
                    Curieux et audacieux, j’aime expérimenter, sortir de ma zone de confort et transformer les idées en solutions concrètes.
                    L’échec ne me freine pas : il m’aide à progresser.

                    Aujourd’hui, je dirige une équipe de développeurs et de designers engagés, Flyer for the Future, avec laquelle nous imaginons et construisons des projets numériques innovants.
            </p>

             <br />

             <button className="bg-orange-500 p-3 cursor-pointer rounded-lg font-bold "  onClick={()=>document.getElementById('my_modal_4').showModal()}>Competences</button>
             
           
         
         </div>

          


         <img src={avatar} alt="avatar dessin"  className="absolute -bottom-15 left-0 max-h-120 " />

    </div>

    <Skills/>

    </>
  )
}
