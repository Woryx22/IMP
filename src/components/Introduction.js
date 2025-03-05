import "../index.css"
import kk from '../images/kk.webp';

export default function Introduction() {
    return (
        <div className="w-full h-screen bg-bottom bg-cover bg-[#4c4d6e] bgk">
            <div className="mt-6 absolute left-1/2 -translate-x-1/2">
                <h2 className="text-white font-bold text-[clamp(2rem,5vw,3.5rem)]">Úvod</h2>
            </div>
            <div className="w-full h-full grid gap-4 lg:gap-2 grid-cols-1 xl:grid-cols-2 justify-items-center content-center">
                <div className="w-[80vw] xl:w-[35vw] h-[35vh] xl:h-[75vh] rounded-xl">
                    <img src={kk} alt="aaa" className="w-full h-full object-cover rounded-xl" loading="lazy" />
                </div>
                <div className="bg-[#4c4d6e] w-[80vw] xl:w-[35vw] h-[35vh] xl:h-[75vh] rounded-xl overflow-hidden">
                    <h1 className="font-bold text-[clamp(1.5rem,4vw,2.5rem)] text-white mt-5 ms-10">Něco o mně</h1>
                    <p className="text-[clamp(0.6rem,2vw,1.25rem)] text-white mx-10 ">
                        Ahoj, jsem Fotografka z Krkonoš, přesněji z Vrchlabí, lehce v běžném životě introvert, ale s foťákem v ruce se ze mě stává extrovert,
                        který se snaží zaznamenat co nejvíce momentů. Můj první cíl bylo focení koní, nyní se ze mě stala primárně rodinná a svatební Fotografka 🫶🏻. Zároveň ráda beru svůj foťák na procházky do hor, kde se snažím zachytit báječné výhledy
                        a to primárně v Krkonoších, když je mám za rohem.Níže se nachází malá ukázka k jednotlivým focení, <a target="_blank" rel="noreferrer" href="https://eu.zonerama.com/horajda/629890" className="text-blue-500">více naleznete zde.</a>
                    
                    </p>
                    {/* <p className="text-[clamp(0.6rem,2vw,1.25rem)] text-white mx-10 sm:mt-5 xl:mt-10">
                        Níže se nachází malá ukázka k jednotlivým focení, <a target="_blank" rel="noreferrer" href="https://eu.zonerama.com/horajda/629890" className="text-blue-500">více naleznete zde.</a>
                    </p> */}
                </div>
            </div>
        </div>
    )
}
