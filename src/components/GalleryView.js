// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../index.css";

// export default function Gallery() {
//     const [allImagesState, setAllImageState] = useState([]);

//     useEffect(() => {
//         loadAllImages();
//     }, []);

//     const loadAllImages = () => {
//         axios.get("http://localhost:3001/getAllImages")
//             .then((queryResponse) => {
//                 console.log(queryResponse.data);
//                 setAllImageState(queryResponse.data);
//             })
//             .catch((err) => { console.log(err) });
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Galerie</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {allImagesState.map((image) => (
//                     <div key={image._id} className="relative group">
//                         <img
//                             src={'http://localhost:3001/galery/' + image.name + ".jpg"}
//                             alt={image.name}
//                             className="w-full h-auto rounded-lg shadow-md"
//                         />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
//                             <p className="text-white text-lg font-semibold">{image.name}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

export default function Gallery() {
    const [allImagesState, setAllImageState] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // Stav pro vybraný obrázek

    useEffect(() => {
        loadAllImages();
    }, []);

    const loadAllImages = () => {
        axios.get("http://localhost:3001/getAllImages")
            .then((queryResponse) => {
                console.log(queryResponse.data);
                setAllImageState(queryResponse.data);
            })
            .catch((err) => { console.log(err) });
    };

    // Funkce pro otevření obrázku v modálním okně
    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    // Funkce pro zavření modálního okna
    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Galerie</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImagesState.map((image) => (
                    <div
                        key={image._id}
                        className="relative group cursor-pointer hover:scale-105"
                        onClick={() => openImageModal(image)} // Otevření obrázku po kliknutí
                    >
                        <img
                            src={'http://localhost:3001/galery/' + image.name + ".jpg"}
                            alt={image.name}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <p className="text-white text-lg font-semibold">{image.name}</p>
                        </div> */}
                    </div>
                ))}
            </div>

            {/* Modální okno pro zobrazení zvětšeného obrázku */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeImageModal} // Zavření modálního okna po kliknutí mimo obrázek
                >
                    <div className="relative max-w-full max-h-full">
                        <img
                            src={'http://localhost:3001/galery/' + selectedImage.name + ".jpg"}
                            alt={selectedImage.name}
                            className="max-w-full max-h-screen rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors"
                            onClick={closeImageModal} // Tlačítko pro zavření modálního okna
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}