import Link from "next/link"
import Image from "next/image"

const LogoNavegacion = () => {
  return (
    <div>
           <Link href="/" className="flex items-center">
          <Image
            src="/Img/logo.jpg"
            className="h-20 mr-3 w-20 rounded-full animate animate-jelly "
            alt="aq logo"
            width={100}
            height={100}
          />
          <span className="self-center hidden sm:inline-block sm:text-2xl font-semibold whitespace-nowrap dark:text-white ">
           AQ ESTUDIO DE ARQUITECTURA
          </span>
        </Link>
    </div>
  )
}

export default LogoNavegacion