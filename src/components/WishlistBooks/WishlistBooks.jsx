import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { TbBrandPagekit } from "react-icons/tb";
import { Link } from 'react-router-dom';

const WishlistBooks = ({book}) => {
    const {id, image, tags, bookName, totalPages, category ,publisher, yearOfPublishing, author, rating}= book;
    return (
        <div className='flex flex-col md:flex-row p-6 gap-8 border rounded-xl mb-6 mt-8'>
<div className='bg-[#1313130d] rounded-xl px-12 py-8'>
    <img className='w-[150px] h-[190px]' src={image} alt="" />
</div>

<div>
<h3 className='text-[#131313] text-2xl font-bold'>{bookName}</h3>
<h5 className='font-work-sans text-[#131313cc] text-base font-medium pt-1  pb-5'>By : {author}</h5>

<div className='flex gap-4 items-center pt-6 overflow-auto flex-col lg:flex-row'>
<span className='text-base text-[#131313] font-bold'>Tag </span>
{

tags.map((tag, idx) => <h3 key={idx} className='text-[#23BE0A] font-work-sans text-base font-medium bg-[#23be0a0d] py-2 px-4 rounded-[30px]'> {tag}</h3>
)

}
<div className="flex items-center gap-2">
<h6 className="text-[#131313] font-semibold font-work-sans text-base flex items-center gap-2"><IoLocationOutline /> Year of Publishing: </h6>
<h4 className="font-work-sans text-base text-[#131313] font-semibold">{yearOfPublishing}</h4>
</div>


</div>

<div className="flex items-center gap-[125px] py-3">

<h4 className="font-work-sans text-base flex items-center gap-2 "><GoPeople />
 {publisher}</h4>

<p className='flex items-center'><TbBrandPagekit /> page {totalPages}</p>
</div>

<hr className='pt-4' />

<div className='flex items-center gap-3'>
<h3 className='text-base text-[#328EFF] bg-[#328eff26] px-5 py-2 border-0 rounded-[30px]'>Category: {category}</h3>
<h3 className='text-base text-[#FFAC33] bg-[#ffac3326] px-5 py-2 border-0 rounded-[30px]'>Rating: {rating}</h3>

<Link to={`/book/${id}`} className='bg-[#23BE0A] text-lg text-white font-medium px-5 py-2 rounded-[30px]'> <button>View Details</button> </Link>

</div>

</div>

</div>
    );
};

WishlistBooks.propTypes ={
    book: PropTypes.object,
    }

export default WishlistBooks;