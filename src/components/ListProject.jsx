import Projet from "./Projet";
import image1 from "../../public/projets/projet1.jpg"

export default function ListProject() {


   const projets = [ 
         
        {nom : "You are special", description : "un jeu qui permettra de récuperer tous les élements", lien: "",image: image1,mot:"Mini jeu "},
        {nom : "Mois de mars", description : "un jeu qui permettra de récuperer tous les élements", lien:"",image:image1,mot:"fun"},
        {nom : "Mois de mars", description : "un jeu qui permettra de récuperer tous les élements", lien:"",image:image1,mot:"fun"},
        {nom : "Mois de mars", description : "un jeu qui permettra de récuperer tous les élements", lien:"",image:image1,mot:"fun"}
        
     ];




  return (
    <section className="bg-black text-white grid grid-cols-1 justify-items-center gap-10 mt-20  md:grid-cols-2  " id="projets">

         <div className="text-center w-[90%]">
            <h2 className="text-3xl font-bold mt-5 md:text-6xl  ">Portefolio</h2>
            <p className="md:text-lg">Les projets en cours et incomplet en passant par mes passes temps</p>
         </div>

         {projets.map((projet,index) => (

               <Projet key={index}  projet = {projet} />
         )) }  



    </section>
  )
}
