export default function About() {
    return (
        <div className="w-screen flex flex-wrap justify-center align-middle items-center my-5">
            <div className="w-fit h-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="block text-gray-700 text-2xl font-bold mb-2">About</h1>
                <div>
                    <p>Hello</p>
                    <p>This is my first project using react + typescript</p>
                    <p>Please post suggestions on my GitHub</p>
                </div>
                <p>Look at the <a href="https://github.com/professionalowo/minecraftlookup/tree/master"
                                  className="hover:text-blue-600 text-gray-600 font-bold">source</a>!</p>
            </div>
        </div>
    )
}