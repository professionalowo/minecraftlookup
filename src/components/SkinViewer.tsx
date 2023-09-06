import {JSX} from "react";
import {MinecraftSkinViewer} from "@wiicamp/react-minecraft-skin-viewer";

function SkinViewer(): JSX.Element {
    return (
        <div className="w-full flex flex-wrap justify-center mt-3">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-fit">
            <MinecraftSkinViewer
                skin="https://mineskin.eu/skin/IceKey"
                width={320}
                height={480}
                background="white"
                control
                walk={true}
            />
            </div>
        </div>
    )
}

export default SkinViewer;