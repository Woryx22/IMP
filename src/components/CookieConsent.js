import { useState, useEffect } from "react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-3xl shadow-lg flex items-center justify-between">
            <p className="text-sm">Tento web používá <a href="/podminky" className="text-blue-600">cookies</a>. </p>
            <div>
                <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">
                    Přijmout pouze nezbytné
                </button>
                <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">
                    Přijmout
                </button>
            </div>

        </div>
    );
};

export default CookieConsent;
