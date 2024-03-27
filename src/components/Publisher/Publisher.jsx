import { useEffect, useState } from "react";
import logo from "../../../src/assets/images/publish.jpg"
import { SiAffinitypublisher } from "react-icons/si";
import bookLogo from "../../../src/assets/images/book.jpg"

const Publisher = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setData(data))
    
    
    }, [])


    return (
        <div className="mb-24">

<div className="mb-6">
            <h1 className="text-4xl font-semibold font-work-sans flex items-center gap-4"><img className="w-[64px] h-[44px]" src={bookLogo} alt="" /> Publishers</h1>
        </div>

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
<p className="text-xl font-bold mt-4" href="">Publisher Name: {data.author}</p>

    </div>
    
    </div> )

}
</a>


        </div>
    );
};

export default Publisher;