import "../index.css"
import ki1 from '../images/k1.webp';
import ki2 from '../images/k2.webp';
import ki3 from '../images/k3.webp';

export default function HorsePhotos() {
    return (
        <div id="horsephotos" className="bg-[#44456d] w-full pb-2 h-auto bg-bottom bg-cover">
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-[clamp(1.5rem,5vw,3rem)]">Focení koní a s nimi</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-[clamp(1rem,3vw,1.5rem)] w-3/4 lg:w-1/2 mx-auto">
                    Milujete koně a chcete mít jejich krásu zachycenou na profesionálních fotografiích? Postarám se o přirozené a působivé fotografie, které vystihnou jejich jedinečnou osobnost i váš vztah s nimi.
                </p>
            </div>
            <div className="w-full grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-24">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={ki1} alt="Kůň obr. 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden">
                    <img src={ki2} alt="Kůň obr. 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={ki3} alt="Kůň obr. 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
