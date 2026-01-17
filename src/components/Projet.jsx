
export default function Projet({projet}) {
  return (

      <div className="w-[90%]  bg-black flex flex-col items-center ">

           <div className="w-full">
               <img  src={projet.image} alt="image projet" />
           </div>

           <div className="w-[90%]">

                <span className="text-orange-500 mt-5 block">{projet.mot}</span>

                <h3 className="text-2xl font-bold my-4 md:text-4xl">{projet.nom}</h3>

                <p className="text-md ">{projet.description}</p>
                
                <a href={projet.lien} className="mt-2.5 flex underline font-bold ">Découvrir</a>

           </div>

      </div>
  )
}
