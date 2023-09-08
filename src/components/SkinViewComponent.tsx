import SkinViewer from "./SkinViewer.tsx";
import {ReactNode, useState} from "react";
import {useParams} from "react-router-dom";

export default function SkinViewComponent() {
    const [color, setColor] = useState<string>("white");
    const [move, setMove] = useState<boolean>(true);
    const {username} = useParams();
    function Sidebar({children}: { children: ReactNode }) {

        return (
            <div className="flex h-auto">
                <aside
                    className="mt-1 w-fit bg-gray-200 flex flex-wrap p-3 shadow-md rounded transition-transform -translate-x-full sm:translate-x-0 flex-col gap-3 text-gray-700 text-sm font-bold">
                    <div className="flex h-fit gap-1 items-center">
                        <label>Background:</label>
                        <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
                    </div>
                    <div className="flex h-fit gap-1 items-center">
                        <label>Move:</label>
                        <input type="checkbox" value={String(move)} onChange={e=>setMove(Boolean(e.target.value))}/>
                    </div>
                </aside>
                {children}
            </div>
        )
    }

    return <Sidebar>
        <SkinViewer color={color} move={move} username={username? username:"Notch"}/>
    </Sidebar>
}