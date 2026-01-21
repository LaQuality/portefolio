

export default function Footer() {
  return (
    
     <footer className="flex flex-col items-center bg-black text-gray-100 h-18  ombre  mt-20">       
         {/* <a href="https://fr.freepik.com/photos-gratuite/illustration-3d-amusante-arbitre-noir-masque_14201303.htm#fromView=search&page=1&position=2&uuid=4b6495cf-23a9-4c14-bc31-a49d6513ac83&query=avatar+dessin+sans+arri%C3%A8re+plan" className="m-1 mt-2 underline">Image de julos sur Freepik</a> */}
        
        
        
         <div className="dropdown dropdown-top  m-1 mb-4 underline ">
            <div tabIndex={0} role="button" className="cursor-pointer">Credits Images</div>
            <ul tabIndex="-1" className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-black">
              <li> <a href="https://fr.freepik.com/vecteurs-libre/garcon-qui-etudie-ordinateur-portable-illustration_88805085.htm#fromView=search&page=2&position=13&uuid=e2b52817-4667-456a-ba0e-e01d19726549&query=personnage+informaticien+dessin ">Image de djvstock sur Freepik</a></li>
              <li> <a href="https://www.freepik.com/free-photo/close-up-hand-with-magnifying-glass_13662469.htm#fromView=search&page=1&position=24&uuid=6eb48255-4d59-470c-bd33-f30a5cee4d73&query=recherche+">Image by freepik</a></li>
              <li> <a href="https://www.freepik.com/free-photo/kids-participating-treasure-hunt_16621685.htm#fromView=search&page=1&position=42&uuid=6d34ba8f-6846-471b-8971-dce8b44c86b3&query=jeux+de+recherche">Image by freepik</a></li>
            </ul>
        </div>
         
         <span className="text-sm">La Qualité (Johnny Kiko) © 2026</span> 
     </footer>  


  )
}
