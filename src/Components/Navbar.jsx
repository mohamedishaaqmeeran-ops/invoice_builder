import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-yellow-500 text-blue-950 ">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="border-2 h-10 rounded-full border-blue-950"
          />
          <h1 className="font-bold text-lg">Invoice Builder</h1>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMenu(!menu)}>
          ☰
        </button>

        <div className="hidden md:flex gap-6 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 text-yellow-400 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/invoice"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 text-yellow-400 px-3 py-2 rounded-lg font-semibold text-sm md:text-base"
                : "px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-950 hover:text-yellow-400"
            }
          >
            Create Invoice
          </NavLink>
        </div>
      </div>

      {menu && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 font-semibold">
          <Link to="/" onClick={() => setMenu(false)}>
            Home
          </Link>
          <Link to="/invoice" onClick={() => setMenu(false)}>
            Create Invoice
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
