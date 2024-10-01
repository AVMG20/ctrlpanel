import Link from 'next/link'
import { Ghost, CoffeeIcon, Compass, ArrowLeft } from "lucide-react"

export default async function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex flex-col items-center justify-center p-4">
            <div className="text-center bg-base-100 rounded-lg shadow-xl p-8 max-w-lg w-full">
                <h1 className="text-8xl font-bold mb-4 text-primary">4<Ghost className="inline animate-bounce" size={80}/>4</h1>
                <p className="text-3xl font-semibold mb-6 text-secondary">Oops! Page got spooked!</p>

                <div className="flex justify-center space-x-4 mb-8">
                    <CoffeeIcon className="text-accent animate-pulse " size={48} />
                    <Compass className="text-info animate-spin" size={48} />
                </div>

                <p className="text-xl mb-8">Looks like you've wandered into the void. Don't worry, even our best explorers get lost sometimes!</p>

                <Link href="/" className="btn btn-primary btn-lg group transition-all duration-300 ease-in-out transform hover:scale-105">
                    <ArrowLeft className="mr-2 transition-all duration-300 ease-in-out transform group-hover:-translate-x-2" />
                    Beam me back!
                </Link>
            </div>
        </div>
    )
}