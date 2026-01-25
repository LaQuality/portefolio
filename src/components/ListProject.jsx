import Projet from "./Projet";
import image2 from "/projets/search.jpg"
import image1 from "/projets/femmes.jpg"
import image3 from "/projets/green.jpg"



export default function ListProject() {


   const projets = [ 
         
        {nom : "You are unique", description : "Un défi réalisé en HTML, CSS et Javascript pure pour le mois de la femme (mars). Consigne : Cliquer sur toutes les images", lien: "https://laquality.github.io/D-fi_0/",image: image1,mot:"Mini Défi "},
        {nom : "Explore", description : "Un défi interactive consistant a exploré des images de bout en bout . Consigne : utiliser votre doigt ou souris pour découvrir l'image et lacher pour passer à une autre image ", lien:"https://laquality.github.io/D-fi_1/",image:image2,mot:"Mini Défi"},
        {nom : "Site Green", description : "Site vitrine réalisé pour le fun", lien:"https://laquality.github.io/site_green/",image:image3,mot:"fun"},
        
     ];




  return (
    <section className="bg-black text-white grid grid-cols-1 justify-items-center gap-10 mt-20  md:grid-cols-2  " id="projets">

         <div className="text-center w-[90%]">
            <h2 className="text-4xl font-bold mt-5 md:text-6xl  ">Portefolio</h2>
            <p className="md:text-lg">Une courte liste de projets et défis réalisés</p>
         </div>
         
         {projets.map((projet,index) => (

               <Projet key={index}  projet = {projet} />
         )) }  



    </section>
  )
}
