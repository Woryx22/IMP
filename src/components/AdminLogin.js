import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CryptoJS from "crypto-js";  // Import knihovny pro SHA-256

export default function AdminLogin({ setIsAdminLoggedIn }) {
  const navigate = useNavigate();
  const [passwordState, setPasswordState] = useState();

  const sendLogin = async () => {
    // Hash hesla (SHA256)
    const hashedPassword = CryptoJS.SHA256(passwordState).toString(CryptoJS.enc.Base64);  // Base64 kódování

    // Odeslání hashe na server
    try {
      const response = await axios.get("https://api.katerinasfotakem.cz/adminLogin", { params: { password: hashedPassword } });
      console.log(response.data);
      if (response.data === "SUCCESS") {
        setIsAdminLoggedIn(true);
        navigate("/adminPage");
      } else {
        console.log("Invalid login.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
          Přihlášení
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
              Heslo
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              onChange={(event) => setPasswordState(event.target.value)}
              className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => sendLogin()}
          >
            Přihlásit
          </button>
        </div>
      </div>
    </div>
  );
}
