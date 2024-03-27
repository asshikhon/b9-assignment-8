import { useEffect, useState } from "react";
import icon from "../../../src/assets/images/author.png"

const Author = () => {
const [data, setData] = useState([]);


useEffect(() => {
fetch('books.json')
.then(res => res.json())
.then(data => setData(data))


}, [])


    return (


        <div className="mb-24">
        <div className="mb-6">
            <h1 className="text-4xl font-semibold font-work-sans flex items-center gap-3"><img className="w-[80px] h-[80px]" src="https://eboighar.com/frontend/assets/images/svg/authors-32x32.svg" alt="" /> Authors</h1>
        </div>

<a className="grid md:grid-cols-3 mx-auto pl-20 md:pl-32 gap-12" href="">

{

data.map(data => <div key={data.id} className="" 
 > 

    <div>
<img className="rounded-[50%] text-center pb-3" src={icon} alt="" />
<a className="text-xl font-bold " href="">Author Name: {data.author}</a>

    </div>
    
    </div> )

}
</a>


        </div>
    );
};

export default Author;