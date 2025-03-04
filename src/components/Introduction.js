import "../index.css"
import kk from '../images/kk.webp';

export default function Introduction() {
    return (
        <div id="introduction" className=" w-[100%] h-[100vh]  bg-bottom bg-cover bg-[#4c4d6e] bgk">
            <div className="mt-6 absolute left-1/2 -translate-x-1/2">
                <h2 className="text-white font-bold text-4xl ">Úvod</h2>
            </div>
            <div className="w-[100%] h-[100vh] grid gap-4 lg:gap-2 grid-cols-1 lg:grid-cols-2 justify-items-center content-center">
                <div className=" w-[80vw] lg:w-[35vw] h-[35vh] lg:h-[75vh]  rounded-xl ">
                <img src={kk} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="bg-[#4c4d6e] w-[80vw] lg:w-[35vw] h-[35vh] lg:h-[75vh] rounded-xl">
                    <h1 className="font bold text-2xl md:text-4xl lg:text-6xl font-bold text-white ms-10 mt-5">Něco o mně</h1>
                    <p className="text-xs sm:text-base md:text-xl lg:text-3xl text-white mx-10 sm:mt-10 xl:mt-28">Ahoj, jsem Fotografka z Krkonoš, přesněji z Vrchlabí, lehce v běžném životě introvert, ale s foťákem v ruce se ze mě stává extrovert,
                        který se snaží zaznamenat co nejvíce momentů. Můj první cíl bylo focení koní, nyní se ze mě stala primárně rodinná a svatební Fotografka 🫶🏻. Zároveň ráda beru svůj foťák na procházky do hor, kde se snažím zachytit báječné výhledy
                        a to primárně v Krkonoších, když je mám za rohem.</p>
                    <p className="text-xs sm:text-base md:text-xl lg:text-3xl text-white mx-10 sm:mt-50 xl:mt-10">Níže se nachází malá ukázka k jednotlivým focení, <a target="_blank" rel="noreferrer" href="https://eu.zonerama.com/horajda/629890" className="text-blue-500">více naleznete zde.</a></p>
                </div>
            </div>

        </div>
    )
}