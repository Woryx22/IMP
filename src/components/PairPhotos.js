import "../index.css"
import ti1 from '../images/t1.webp';
import ti2 from '../images/t2.webp';
import ti3 from '../images/t3.webp';

export default function PairPhotos() {
    return (
        <div id="pairphotos" className="bg-[#4c4d6e] w-[100%] h-[100vh]  bg-bottom bg-cover">
            {/* <div>
                <h2 className="text-white font-bold text-4xl text-center pt-6 ">Portfolio</h2>
            </div> */}
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-4xl md:text-5xl">Těhotenské/párové focení</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-lg md:text-3xl w-3/4 lg:w-1/2 mx-auto">
                    Ať už jde o těhotenské nebo párové focení, vždy dbám na pohodovou atmosféru a přirozenost. Společně vytvoříme krásné fotografie, které budou plné emocí a autentičnosti.
                </p>
            </div>
            <div className="w-[100%] grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-24 ">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[50vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={ti1} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden ">
                    <img src={ti2} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={ti3} alt="aaa" className="w-full h-full object-cover " />
                </div>
            </div>


        </div>
    )
}