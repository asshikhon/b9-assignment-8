import { Link } from "react-router-dom";
import img from "../../../src/assets/images/banner.png"

const Banner = () => {
    return (
        <div className="hero bg-[#1313130d] rounded-3xl mb-10 lg:mb-24">
        <div className="hero-content flex-col lg:flex-row">
         
          <div>
            <h1 className="text-4xl leading-[48px] lg:leading-[80px] lg:text-[56px] text-[#131313] font-bold pb-4 lg:pb-12">Books to freshen up <br /> your bookshelf</h1>

            <Link to="/listed">
            <button className="btn bg-[#23BE0A] border-0 font-work-sans btn-primary text-white font-bold text-lg">View The List</button>

            </Link>
          </div>
          <img src={img} className="my-10 lg:my-20 rounded-lg lg:ml-24" />
        </div>
      </div>
    );
};

export default Banner;