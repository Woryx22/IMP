import "../index.css"
import ti1 from '../images/t1.webp';
import ti2 from '../images/t2.webp';
import ti3 from '../images/t3.webp';

export default function PairPhotos() {
    return (
        <div id="pairphotos" className="bg-[#4c4d6e] w-full pb-2 h-auto bg-bottom bg-cover">
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-[clamp(1.5rem,5vw,3rem)]">Těhotenské/párové focení</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-[clamp(1rem,3vw,1.5rem)] w-3/4 lg:w-1/2 mx-auto">
                    Ať už jde o těhotenské nebo párové focení, vždy dbám na pohodovou atmosféru a přirozenost. Společně vytvoříme krásné fotografie, které budou plné emocí a autentičnosti.
                </p>
            </div>
            <div className="w-full grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-24">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={ti1} alt="Pár obr. 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden">
                    <img src={ti2} alt="Pár obr. 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={ti3} alt="Pár obr. 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
