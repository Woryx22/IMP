import "../index.css"
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'


export default function Main() {
    return (
        <div id="main" className="bgi w-[100%] h-[100vh] bg-bottom bg-cover relative flex items-center justify-center">
            <div>
                <h1 className="text-white font-bold text-4xl md:text-7xl">Kateřina Horáčková</h1>
                <div className="mt-12 md:mt-7 ml-[50%] md:ml-0 -translate-x-1/2 translate-y-1/2 md:translate-x-0 md:translate-y-0">
                    <a href="#contact" className="bg-[#44456d] hover:bg-[#4c4d6e] rounded-xl text-white font-medium text-xl p-1.5">Kontaktujte mě</a>
                </div>
            </div>
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-8xl">
                <ChevronDoubleDownIcon className="w-[80px]" />
            </span>
        </div>
    )
}