import "../index.css"



export default function Contact() {
    return (
        <div id="contact" className="bg-gray-800 w-[100%] h-[100vh]  bg-bottom bg-cover">
            <div className="mt-6 absolute left-1/2 -translate-x-1/2">
                <h2 className="text-white font-bold text-4xl ">Kontakt</h2>
            </div>
            <div className="flex items-center justify-center w-[80%] h-[100%] mx-auto">
                <form className="max-w-sm mx-auto">
                    <div class="mb-5">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jméno a příjmení</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jan Novák" />
                    </div>

                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Váš email</label>
                    <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We ll never share your details. Read our </p>

                    <div class="mb-5">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zpráva</label>
                        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </form>
            </div>

        </div>
    )
}