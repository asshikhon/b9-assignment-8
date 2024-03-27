import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { IoIosStarOutline } from "react-icons/io";
const Book = ({book}) => {
const {id, image, tags, bookName, category, author, rating}= book;

    return (
<Link to={`/book/${id}`} className="card p-6 border rounded-xl">
  <figure className='bg-[#F3F3F3] rounded-xl'><img className='w-40 h-72 py-10 lg:py-14 ' src={image} alt="coming soon.." /></figure>

<div className='flex gap-4 items-center pt-6'>

{

tags.map((tag, idx) => <h3 key={idx} className='text-[#23BE0A] font-work-sans text-base font-medium bg-[#23be0a0d] py-2 px-4 rounded-[30px]'>{tag}</h3>
)

}

</div>
  <div className="card-body">
    <h2 className="card-title text-[#131313] text-2xl font-bold ">
      {bookName}
    </h2>
   <h5 className='font-work-sans text-[#131313cc] text-base font-medium pt-1 border-b border-dashed pb-5'>By : {author}</h5>
    <div className="flex justify-between pt-2">
  <h6 className='text-[#131313cc] font-work-sans font-medium text-base'>{category}</h6>
  <h6 className='text-[#131313cc] font-work-sans font-medium text-base flex items-center justify-center text-center gap-2'>{rating} <IoIosStarOutline></IoIosStarOutline></h6>

    </div>
  </div>
</Link>
    );
};

Book.propTypes = {
book: PropTypes.object,

}
export default Book;