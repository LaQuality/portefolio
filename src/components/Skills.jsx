import { AiOutlineClose } from "react-icons/ai";
import reactLogo from "../../public/skills/react.svg"
import html from "../../public/skills/html.svg"
import figma from "../../public/skills/figma.svg"
import css from "../../public/skills/css.svg"
import tailwind from "../../public/skills/tailwind.svg"





export default function Skills() {

    const skills = [
        {image : reactLogo, name : "React Js"},
        {image : html, name : "HTML"},
        {image : css, name : "CSS"},
        {image : tailwind, name : "Tailwind CSS"},
        {image : figma, name : "Figma"}

    ]



  return (
   
     <dialog id="my_modal_4" className="modal z-10 backdrop-blur-sm flex flex-col justify-center  text-white">
            <div className="modal-box w-11/12 max-w-5xl h-[75vh] md:[80vh] bg-black border border-orange-500 shadow-xl shadow-black text-center">
                <h3 className="font-bold text-4xl">Skills</h3>
                <p className="py-4">Click the button below to close</p>

                <div className="grid grid-cols-1 md:grid-cols-3">
                   
                    {skills.map((skill,index) => (

                         <div className="flex flex-col items-center" key={index}>
                            <img src={skill.image} className="h-25  w-30" alt="logo" />
                            <span className="font-bold mt-2 mb-5">{skill.name}</span>
                         </div>

                    ))}


                </div>
            
                </div>
                <div className="modal-action w-full flex justify-center">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className=" bg-orange-500 p-4 cursor-pointer rounded-full font-bold "><AiOutlineClose className="" /></button>
                </form>
            </div>
     </dialog>
  )
}
