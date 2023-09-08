import {JSX} from "react";
import {MinecraftSkinViewer} from "@wiicamp/react-minecraft-skin-viewer";

function SkinViewer({username,color,move}:{username:string,color:string,move:boolean}): JSX.Element {
    const skinPath = `https://mineskin.eu/skin/${username}`;
    return (
        <div className="w-full flex flex-wrap justify-center mt-3">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-fit h-fit">
            <MinecraftSkinViewer
                skin={skinPath}
                width={320}
                height={480}
                background={color}
                control
                walk={move}
            />
            </div>
        </div>
    )
}

export default SkinViewer;