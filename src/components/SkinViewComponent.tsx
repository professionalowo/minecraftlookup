
import SkinViewer from "./SkinViewer.tsx";
import {ReactNode, useState} from "react";

export default function SkinViewComponent() {
    const [username, setUsername] = useState<string>("Notch");
    const [color, setColor] = useState<string>("white");
    const [move, setMove] = useState<boolean>(true);
    function Sidebar({children}: { children: ReactNode}) {

        return (
            <div className="flex h-auto">
                <aside
                    className="mt-1 w-fit bg-gray-200 flex flex-wrap p-3 shadow-md rounded transition-transform -translate-x-full sm:translate-x-0 flex-col gap-3 text-gray-700 text-sm font-bold">
                    <div className="flex h-fit gap-1 items-center">
                        <label>Name:</label>
                        <input type="text" value={username}/>
                    </div>
                    <div className="flex h-fit gap-1 items-center">
                        <label>Background:</label>
                        <input type="color" value={color}/>
                    </div>
                    <div className="flex h-fit gap-1 items-center">
                        <label>Move:</label>
                        <input type="checkbox" value={move.toString()}/>
                    </div>
                </aside>
                {children}
            </div>
        )
    }

    return <Sidebar>
        <SkinViewer color={color} move={move} username={username}/>
    </Sidebar>
}