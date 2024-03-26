import { getStoredBook, saveBook } from "../../utility/localstorage";



const PagesToRead = () => {

    const id = getStoredBook();
console.log(id);

    return (
        <div>
            <h1 className="text-4xl">chart</h1>
        </div>
    );
};

export default PagesToRead;