import avatar from "../../public/me.png"


export default function Description() {
  return (
    <div className='h-screen text-white   relative '>
        <div className='flex justify-center items-end flex-col text-end mr-4 '>

        
            <h2 className='text-4xl md:text-6xl font-bold mt-20'>Qui <span className="text-orange-500">suis</span>-je ? </h2>
            
            <p className="text-md max-w-[90%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ab quaerat minus alias inventore nostrum deleniti minima hic voluptatem voluptates itaque unde, eaque maxime numquam nihil blanditiis accusamus est nemo!</p>

             <br />

             <button className="bg-orange-500 p-3 cursor-pointer rounded-lg font-bold">Competences</button>
         
         </div>

         <img src={avatar} alt="avatar dessin"  className="absolute bottom-0 left-0 max-h-110" />

    </div>
  )
}
