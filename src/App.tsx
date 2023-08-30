import {useState} from "react";
import Showcase from "./components/Showcase.tsx";
import Header from "./components/headbar/Header.tsx";


export default function App(){
    const [usernames, setUsernames] = useState<string[]>([]);
    const addToUsernames = (username: string): void => {
        if (!usernames.includes(username.toUpperCase())) {
            setUsernames(prevState => [...prevState, username.toUpperCase()])
        }
    }
    const removeFromUsernames = (username: string): void => {
        setUsernames(prevState => prevState.filter(name => name !== username));
    }
    return (
        <>
            <Header nameHandler={addToUsernames} onClick={() => setUsernames([])}/>
            <div className="w-full flex flex-row content-center flex-wrap justify-center">
                {usernames.map(name => <Showcase username={name} key={name} removeFunction={removeFromUsernames}/>)}
            </div>
        </>
    )
}
