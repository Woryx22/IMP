import "../index.css"
import ri1 from '../images/r1.webp';
import ri2 from '../images/r2.webp';
import ri3 from '../images/r3.webp';

export default function FamilyPhotos() {
    return (
        <div id="familyphotos" className="bg-[#4c4d6e] w-[100%] h-[100vh]  bg-bottom bg-cover">
            {/* <div>
                <h2 className="text-white font-bold text-4xl text-center pt-6 ">Portfolio</h2>
            </div> */}
            <div>
                <h2 className="text-center pt-6 lg:pt-12 text-white font-bold text-4xl md:text-5xl">Rodinné focení</h2>
                <p className="text-center mt-8 lg:mt-20 text-white text-lg md:text-3xl w-3/4 lg:w-1/2 mx-auto">
                    U rodinného foceni mi jde primárně o zachycení momentů, než strojených fotografií, přeci jen děti více baví házení ,,do vzduchu” než se na povel usmívat.
                    Na focení mohu přivést a sestavit fotokoutek.
                </p>
            </div>
            <div className="w-[100%] grid gap-4 xl:gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center content-center mt-10 md:mt-16 lg:mt-24 ">
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[50vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden">
                    <img src={ri1} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden lg:block hidden ">
                    <img src={ri2} alt="aaa" className="w-full h-full object-cover" />
                </div>
                <div className="w-[80vw] lg:w-[40vw] xl:w-[25vw] h-[25vh] lg:h-[40vh] xl:h-[50vh] rounded-xl overflow-hidden hidden xl:block">
                    <img src={ri3} alt="aaa" className="w-full h-full object-cover" />
                </div>
            </div>

            
        </div>
    )
}