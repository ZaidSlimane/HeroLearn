
function LoginPage() {
    return (
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
            <div className="bg-white text-gray-900 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        {/* SVG content */}
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 mt-12">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                            <p className="text-gray-600">Enter your credentials to log in</p>
                        </div>
                        {/* Login form */}
                        <form>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                                <input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2" placeholder="johnsmith@example.com" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" autoComplete="current-password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2" placeholder="************" />
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
