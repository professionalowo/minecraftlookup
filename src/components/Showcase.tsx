import {useEffect} from "react";
import usernameHelper from "../functions/usernameHelper.ts";

interface ShowcaseProps {
    username: string,
    removeFunction: (username: string) => void
}

export default function Showcase(props: ShowcaseProps){
    const username : string = props.username;
    useEffect(() => {
        usernameHelper(username).then(result => {
            if (result.status==="ERR") {
                props.removeFunction(username);
            }
        })
    }, [])
    const imgLink: string = `https://mineskin.eu/armor/body/${username}/100.png`;
    const downloadLink: string = `https://mineskin.eu/download/${username}`;
    return (
        <div
            className="w-auto max-w-xs flex content-center flex-col bg-white shadow-md rounded px-4 py-5 mb-2 mx-1">
            <p className="text-center font-bold mb-2">{username}</p>
            <img src={imgLink} alt={username} className="hover:object-scale-down object-contain self-center"/>
            <div className="flex space-x-2 my-2">
                <div
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline w-1/2">
                    <a href={downloadLink} className="text-center mt-1">Download</a>
                </div>
                <button onClick={() => props.removeFunction(username)}
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2">Remove
                </button>
            </div>
        </div>
    )
}