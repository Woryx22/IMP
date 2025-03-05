import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

export default function Gallery() {
    const [allImagesState, setAllImageState] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // vybranej obrázek

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
        <div id="galerie" className="mx-auto p-6 bg-[#4c4d6e]">
    <h2 className="text-white font-bold text-4xl mb-8 text-center">Galerie</h2>
    
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {allImagesState.map((image) => (
            <div
                key={image._id}
                className="relative group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => openImageModal(image)}
            >
                <img
                    src={'http://localhost:3001/galery/' + image.name + ".jpg"}
                    alt={image.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                />
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
                            loading="lazy"
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