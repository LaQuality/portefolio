import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Header() {
  return (
      
        <header className="flex bg-black h-12 items-center border-b fixed top-0 bottom-0 w-full shadow-2xl shadow-amber-600 z-10">

              <div className="w-[40%] flex justify-center gap-3 md:gap-5 md:1/2 ">
                    <a href="">
                        <FaInstagram className="text-2xl md:text-3xl text-white hover:scale-110 transition" />
                    </a>
                    <a href="">
                        <FaLinkedin className="text-2xl  md:text-3xl text-white hover:scale-110 transition" />
                    </a>
                    <a href="">
                        <FaGithub className="text-2xl  md:text-3xl text-white hover:scale-110 transition" />
                    </a>

              </div>


              <div className="w-[60%] flex justify-center gap-3 md:gap-5 md:1/2 font-bold">

                   <a className="text-white" href="#projets">Mes projets</a>
                   <a className="text-orange-500" href="#contact">Contact Me</a>

              </div>

        </header>

    )
}
