import "../index.css"


export default function Introduction() {
    return (
        <div id="introduction" className="bgi w-[100%] h-[100vh]  bg-bottom bg-cover grid gap-4 lg:gap-[150px] grid-cols-1 lg:grid-cols-2 justify-items-center content-center">
                <div className="bg-gray-500 w-[80vw] lg:w-[40vw] h-[40vh] lg:h-[75vh] opacity-85 rounded-3xl">
                    <p>obrázek</p>
                </div>
                <div className="bg-gray-500 w-[80vw] lg:w-[40vw] h-[40vh] lg:h-[75vh] opacity-85 rounded-3xl">
                    <h1 className="font bold text-2xl md:text-4xl lg:text-6xl font-bold text-white ms-10 mt-5">Lorem ipsum</h1>
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mx-10 sm:mt-10 xl:mt-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at natus quibusdam eveniet beatae fugit ipsum a ut itaque repellat architecto eum est illo, facere totam omnis quo! Nobis, numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo reprehenderit placeat enim eveniet voluptates adipisci, libero aspernatur perspiciatis totam, vitae impedit odio iusto vero. Fugit dolor cumque laboriosam quisquam.</p>
                </div>
        </div>
    )
}