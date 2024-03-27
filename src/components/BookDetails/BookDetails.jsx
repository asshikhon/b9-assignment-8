import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { saveBook } from "../../utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find((book) => book.id === idInt);
    const { image, tags, bookName, category, author, rating, review, yearOfPublishing, publisher, totalPages } = book;

const handleApplyRead = () => {
  saveBook(idInt);
// toast.success('successfully added book for read')


}
const handleApplyWishlist = () => {
  // saveBook(idInt);
  toast.success('successfully added book in wishlist')

}


    return (       
<div className="flex flex-col lg:flex-row mt-10 lg:mt-0">

<div className="bg-[#1313130d] rounded-xl p-8 lg:p-[74px] lg:w-2/5"><img className="h-72 mx-auto lg:h-[600px]" src={image} alt="coming soon.."/></div>

<div className="lg:w-3/5 ml-4 pt-8 lg:pt-0 p-8">
    <h2 className=" text-[#131313] font-bold text-3xl text-[40px]">{bookName}</h2>
    <h4 className="font-work-sans text-[#131313cc] font-medium pt-6 pb-4">By : {author}</h4>
    <hr />
    <h4 className="font-work-sans text-xl text-[#131313cc] font-medium py-4">Category : {category}</h4>
    <hr />

    <p className="font-work-sans text-[#131313b3] text-base py-6"><span className="text-[#131313] font-bold leading-6">Review :</span> {review}</p>

<div className="flex gap-4 items-center">
{

tags.map((tag, idx) => <a key={idx} className='text-[#23BE0A] font-work-sans text-base font-medium bg-[#23be0a0d] py-2 px-4 rounded-[30px]'>{tag}</a>
)

}


</div>

<hr className="my-6" />

<div className="flex items-center gap-16 ">
<h6 className="text-[#131313b3] font-work-sans text-base ">Number of Pages:</h6>
<h4 className="font-work-sans text-base text-[#131313] font-semibold">{totalPages}</h4>
</div>
<div className="flex items-center gap-[125px] py-3">
<h6 className="text-[#131313b3] font-work-sans text-base ">Publisher:</h6>
<h4 className="font-work-sans text-base text-[#131313] font-semibold">{publisher}</h4>
</div>
<div className="flex items-center gap-[59px] ">
<h6 className="text-[#131313b3] font-work-sans text-base ">Year of Publishing:</h6>
<h4 className="font-work-sans text-base text-[#131313] font-semibold">{yearOfPublishing}</h4>
</div>
<div className="flex items-center gap-[149px] py-3">
<h6 className="text-[#131313b3] font-work-sans text-base ">Rating:</h6>
<h4 className="font-work-sans text-base text-[#131313] font-semibold">{rating}</h4>
</div>

    <div className="flex gap-4 mt-5">
      <button onClick={handleApplyRead} className="btn text-[#131313] bg-transparent border font-work-sans text-base font-semibold">Read</button>
      <button onClick={handleApplyWishlist} className="btn bg-[#50B1C9] text-white text-base font-semibold font-work-sans">Wishlist</button>
    </div>
  </div>
  <ToastContainer />
</div>


    );
};

export default BookDetails;