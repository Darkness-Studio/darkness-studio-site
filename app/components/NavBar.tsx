import Link from "next/link"
import { NavItems } from "../layout"

export default function NavBar( { nav }: {nav : NavItems[]} ) {
    return(
        <div className="bg-black text-white min-h-16 flex items-center justify-between shadow-sm">
            <div className="mx-auto">
                <h1 className="font-bold text-2xl">Nocturnal - Ruse</h1>
            </div>
            <div className="m-auto">
                <ul className="flex">
                    {nav.map((nav) => (
                        <li key={nav.name} className="mr-4 text-xl p-2 hover:bg-white hover:text-black rounded-sm">
                            <Link href={nav.href}>{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}