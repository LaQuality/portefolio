

export default function Input({fonction,valeur,label,type,exemple,Icon}) {
  return (
    
        <div className="flex flex-col w-[90%]">
             <label className=" m-2 mt-5 "  htmlFor="">{label}</label>
             <input name={label} required className=" bg-neutral-900 focus:text-white py-2 pl-4  rounded-lg focus:bg-black outline-none border border-neutral-700 focus:border-2   focus:border-orange-500  md:py-5" type={type} onChange={fonction} value ={valeur} placeholder={exemple} />
             {/* <Icon className="text-2xl  md:text-3xl text-white"/> */}
             
        </div>

  )
}
