

export default function Textarea({fonction,valeur,label,exemple}) {
  return (
          
         <div className="flex flex-col w-[90%]">
             <label className=" m-2 mt-5"  htmlFor="">{label}</label>
              <textarea className=" bg-neutral-900 focus:text-white py-2 pl-4  rounded-lg focus:bg-black outline-none border border-neutral-700 focus:border-2 focus:border-orange-500 md:py-8"
              onChange={fonction}
              name={label}
              placeholder={exemple}
              required
              >
                {valeur.length > 0 ? valeur : ""  }
              </textarea>
        </div>

  )
}
