import Searchbar from "./Searchbar.tsx";
import DeleteAllComponent from "./DeleteAll.tsx";

export default function Header(props: { nameHandler: (username: string) => void, onClick: () => void }) {
    return <div className="w-full flex flex-wrap justify-center align-middle mt-3">
        <Searchbar nameHandler={props.nameHandler}/>
        <DeleteAllComponent onClick={props.onClick}/>
    </div>;
}