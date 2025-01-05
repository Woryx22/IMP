import "../index.css"

import {useNavigate} from "react-router-dom"
import axios from "axios"
import {useState} from "react"

export default function AdminLogin({setIsAdminLoggedIn}) {
    const navigate = useNavigate()

    const [passwordState, setPasswordState] = useState()

    const sendLogin = () =>{

        axios.get("http://localhost:3001/adminLogin", {params: {password: passwordState}})
            .then((queryResponse) =>{
                console.log(queryResponse.data)
                if(queryResponse.data == "SUCCESS")
                {
                    console.log(setIsAdminLoggedIn  )
                    setIsAdminLoggedIn(true)
                    navigate("/adminPage");
                    
                }
            })
    }

    return (
        <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Přihlášení
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
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
                  onChange={ (event) => {setPasswordState(event.target.value)}}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ () => sendLogin()}
              >
                Sign in
              </button>
            </div>

          
        </div>
      </div>
    </>
    )
}