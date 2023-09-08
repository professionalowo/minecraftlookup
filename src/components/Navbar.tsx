import {Link, Outlet} from "react-router-dom";

export default function Navbar() {
    return <div className="h-screen">
        <div className="w-screen bg-gray-200 flex flex-wrap gap-5 p-3 shadow-md rounded">
            <p className="font-bold">SkinLookup</p>
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/viewer" className="hover:text-blue-600">Viewer</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>
        <Outlet/>
    </div>
}