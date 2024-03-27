import { useEffect, useState } from "react";
import logo from "../../../src/assets/images/publish.jpg"
import { SiAffinitypublisher } from "react-icons/si";

const Publisher = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setData(data))
    
    
    }, [])


    return (
        <div className="mb-24">
            <div className="text-center flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold text-red-700 pb-3">Popular Publishers</h1>
<img className="w-64 text-center" src={logo} alt="" />

            </div>

            <a className="grid md:grid-cols-3 mx-auto pl-20 md:pl-32 gap-12 mt-12" href="">

{

data.map(data => <div key={data.id} className="" 
 > 

    <div>
{/* <img className="rounded-[50%] text-center pb-3" src={icon} alt="" /> */}
<p className="rounded-[50%] mb-4"><SiAffinitypublisher className="w-[200px] text-[200px]" /></p>
<a className="text-xl font-bold mt-4" href="">Publisher Name: {data.author}</a>

    </div>
    
    </div> )

}
</a>


        </div>
    );
};

export default Publisher;