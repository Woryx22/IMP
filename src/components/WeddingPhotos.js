import "../index.css"
import si1 from '../images/s1.webp';
import si2 from '../images/s2.webp';
import si3 from '../images/s3.webp';

export default function WeddingPhotos() {
    return (
        <div id="weddingphotos" className="bg-[#44456d] w-full pb-2 h-auto bg-bottom bg-cover">
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-[clamp(1.5rem,5vw,3rem)]">Svatební focení</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-[clamp(1rem,3vw,1.5rem)] w-3/4 lg:w-1/2 mx-auto">
                    Chcete mít krásné vzpomínky, které si budete moct prohlížet opakovaně, a to z Vašeho velkého dne? Ozvěte se mi a najdeme svatební balíček, který Vám bude vyhovovat.
                </p>
            </div>
            <div className="w-full grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-24">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={si1} alt="Svatba obr. 1" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden">
                    <img src={si2} alt="Svatba obr. 2" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[30vw] h-[45vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={si3} alt="Svatba obr. 3" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
