import { useState } from "react";
import Input from "./form/Input";
import Textarea from "./form/Textarea";
import { toast } from 'sonner'
import { FaUser} from "react-icons/fa"
import emailjs from "@emailjs/browser"

export default function Form() {

   const [formData,SetFormData] = useState({nom :"", email:"",message:""});

   const handelChange = (e) => {

          const {name,value} = e.target;

          SetFormData(prev => ({

              ...prev, [name] : value 

          }))

   }

   const handleSubmit = async (e) => {

            e.preventDefault();

          
            try{
               await emailjs.send( 

                      import.meta.env.VITE_EMAILJS_SERVICE_ID,
                      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                      formData,
                      import.meta.env.VITE_EMAILJS_PUBLIC_KEY

                );

                toast.success('Message envoyé avec succès 🎉');
                SetFormData({nom :"",email:"", message:""});


            }catch(error){
          
                  
                toast.error('Message non envoyé, réessayez plus tard ');
            }
            

    }


  return (
    
       <form onSubmit={handleSubmit} className=" flex flex-col items-center w-full md:grid md:grid-cols-2 md:justify-items-center mt-5 md:mt-15 ">

          
             <Input fonction ={handelChange} valeur={formData.nom} label={"nom"} type={"text"} exemple={"Johnny Kiko"} Icon = {FaUser}/>
             <Input fonction ={handelChange} valeur={formData.email} label={"email"} type={"email"} exemple={"exemple@gmail.com"} Icon = {FaUser} />
             
             <Textarea fonction ={handelChange} label={"message"} exemple={"message"} valeur ={formData.message} ></Textarea> 

            <div className="w-[90%]">
                <button type="submit" className="w-30 py-2.5 bg-orange-500 font-bold rounded-lg mt-5 cursor-pointer" >Envoyer</button>
            </div>

       </form>

  )
}
