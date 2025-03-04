import "../index.css"
import si1 from '../images/s1.webp';
import si2 from '../images/s2.webp';
import si3 from '../images/s3.webp';

export default function WeddingPhotos() {
    return (
        <div id="weddingphotos" className="bg-[#44456d] w-[100%] h-[100vh]  bg-bottom bg-cover">
            {/* <div>
                <h2 className="text-white font-bold text-4xl text-center pt-6 ">Portfolio</h2>
            </div> */}
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-4xl md:text-5xl">Svatební focení</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-lg md:text-3xl w-3/4 lg:w-1/2 mx-auto">
                Chcete mít krásné vzpomínky, které si budete moct prohlížet opakovaně, a to z Vašeho velkého dne? Ozvěte se mi a najdeme svatební balíček, který Vám bude vyhovovat.
                </p>
            </div>
            <div className="w-[100%] grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-36 xl:mt-42 ">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[50vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={si1} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden ">
                    <img src={si2} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={si3} alt="aaa" className="w-full h-full object-cover " />
                </div>
            </div>

            
        </div>
    )
}