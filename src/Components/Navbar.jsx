import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
    return (
        <nav className="bg-yellow-500 text-blue-950  ">
            <div className=" mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-3">

                    <img src={logo}
                        alt="logo"
                        className="h-10 w-10 rounded-full object-cover border-2 border-blue-950 cursor-pointer"
                    />

                    <h1 className="text-md md:text-2xl font-bold tracking-wide">     Invoice Builder  </h1>

                </div>
                <div className="flex justify-center md:justify-end gap-2 md:gap-4 flex-wrap">

                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-blue-950 text-yellow-400 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
                        }
                    > Home </NavLink>
                    <NavLink
                        to="/invoice"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-blue-950 text-yellow-400 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
                        }
                    >Create Invoice</NavLink>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;