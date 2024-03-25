import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero bg-[#1313130d] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="../../../src/assets/images/banner.png" className="my-20 rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>

            <Link to="/listed">
            <button className="btn btn-primary">View The List</button>

            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;