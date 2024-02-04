
function RegestrationForm() {

return(
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">

        <div className="bg-white text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden"
             style={{maxWidth: "1000px"}}>

            <div className="md:flex w-full">

                <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                    {/* SVG content */}
                </div>

                <div className="w-full md:w-1/2 py-10 px-5 md:px-10 mt-12">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                        <p className="text-gray-600">Enter your information to register</p>

                        <div className="mt-8">
                            <label htmlFor="roles" className="block text-sm font-medium text-gray-900">Select a
                                role</label>
                            <select id="roles"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="Student" selected>Student</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    {/* Registration form */}
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First
                                    name</label>
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                       placeholder="John"/>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last
                                    name</label>
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                       placeholder="Smith"/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email" autoComplete="email"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                   placeholder="johnsmith@example.com"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" autoComplete="current-password"
                                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                   placeholder="************"/>
                        </div>
                        <div className="mt-8">
                            <button type="submit"
                                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">REGISTER
                                NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* Buy me a beer section */}
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank"
                   className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img className="object-cover object-center w-full h-full rounded-full"
                         src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                         alt="Buy me a beer"/>
                </a>
            </div>
        </div>
    </div>
);

}

export default RegestrationForm;