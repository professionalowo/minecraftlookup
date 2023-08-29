import React, {useState} from "react";
import {Form} from "react-router-dom";

function Searchbar(props: { nameHandler: (username: string) => void }) {
    const [name, setName] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const username: string = e.target.value;
        setName(username);
        e.preventDefault();
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
        const nameElement: HTMLInputElement = e.currentTarget.elements.namedItem("name") as HTMLInputElement
        const name: string = nameElement.value;
        props.nameHandler(name);
        setName("");
        e.preventDefault();
    }

    return (
        <div className="w-full max-w-xs">
            <Form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Username"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="name"/>
                    </label>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Search
                </button>
            </Form>
        </div>
    )
}

export default Searchbar;