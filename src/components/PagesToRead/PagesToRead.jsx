// import { getStoredBook, saveBook } from "../../utility/localstorage";

import { saveBook } from "../../utility/localstorage";



const PagesToRead = () => {

const data = saveBook();
console.log(data);
    return (
        <div>
            <h1 className="text-4xl">chart</h1>
        </div>
    );
};

export default PagesToRead;