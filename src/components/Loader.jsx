

export default function Loader() {
  return (
    <div className="h-screen w-screen bg-black text-orange-500 flex justify-center items-center fixed top-0 bottom-0 gap-4 z-20 ">

        <div className="w-10 h-10 rounded-full border-5 border-t-transparent border-orange-500 animate-spin duration-4000  "> </div>
         <span className="animate-pulse text-xl ">Chargement...</span>
    </div>
  )
}
