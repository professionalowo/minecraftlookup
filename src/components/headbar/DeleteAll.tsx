function DeleteAllComponent(props: { onClick: () => void }) {
    return <div className="flex flex-wrap justify-center mx-2">
        <div className="max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full flex flex-wrap justify-center items-center">
            <button onClick={props.onClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-fit">
                Delete all
            </button>
        </div>
    </div>;
}

export default DeleteAllComponent;