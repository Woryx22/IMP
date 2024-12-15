import "../index.css"
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'


export default function Main() {
    return (
        <div className="bgi w-[100%] h-[93vh] bg-bottom bg-cover relative flex items-center justify-center">
                    <h1 className="text-white font-bold text-4xl md:text-7xl">Kateřina Horáčková</h1>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-8xl">
                        <ChevronDoubleDownIcon className="w-[80px]"/>
                    </span>
                </div>      
    )
}