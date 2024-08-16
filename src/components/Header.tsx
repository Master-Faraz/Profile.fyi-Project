import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <nav className="flex bg-red-600 h-12">
            <div className="w-1/2 bg-yellow-400 text-black flex items-center px-10">
                <Link href={"/"} className="">
                    <Image src={"/logo.svg"} width={30} height={30} alt="" />
                </Link>
            </div>

            <div className="w-1/2 flex items-center justify-end  px-10 space-x-10">
                <Link href={"/"} className="ml-5">LOGO</Link>
                <Link href={"/"} className="ml-5">LOGO</Link>
                <Link href={"/"} className="ml-5">LOGO</Link>
                <Link href={"/"} className="ml-5">LOGO</Link>
            </div>
        </nav>
    )
}

export default Header