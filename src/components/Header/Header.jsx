import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="font-work-sans">
                  <div className="navbar lg:my-12 mx-auto pr-5 lg:pr-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
            <li ><NavLink to="/" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Home</NavLink></li>
            <li ><NavLink to="/listed" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Listed Books</NavLink></li>
            <li ><NavLink to="/pages" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Pages to Read</NavLink></li>
            <li ><NavLink to="/authors" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Authors</NavLink></li>
            <li ><NavLink to="/publisher" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Publisher</NavLink></li>
            </ul>
          </div>
      
          <Link to="/" className="text-2xl text-[#131313] lg:text-3xl font-bold" href="">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-11">
            <li ><NavLink to="/" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Home</NavLink></li>
            <li ><NavLink to="/listed" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Listed Books</NavLink></li>
            <li ><NavLink to="/pages" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Pages to Read</NavLink></li>
            <li ><NavLink to="/authors" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Authors</NavLink></li>
            <li ><NavLink to="/publisher" className={({isActive}) => isActive ? 'text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A]' : 'text-lg text-[#131313cc]'}>Publisher</NavLink></li>

          </ul>
        </div>
        <div className="navbar-end gap-3 lg:gap-4">
      
        <button className="btn text-white lg:btn-lg text-lg font-semibold bg-[#23BE0A] rounded-lg">Sign In</button>
        <button className="btn text-white lg:btn-lg text-lg font-semibold bg-[#59C6D2] rounded-lg">Sign Up</button>


        </div>
      </div>
        </div>
    );
};

export default Header;