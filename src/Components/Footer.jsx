import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-blue-950 mt-10">
            <div className=" mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-xl font-bold mb-3">
                        Invoice Builder
                    </h2>

                    <p className="text-sm leading-6">
                        Invoice Builder helps you create  invoices quickly and easily. Add products, calculate totals, and download invoices as PDF.
                    </p>
                </div>

                <div>

                    <h2 className="text-xl font-bold mb-3">
                        Quick Links
                    </h2>

                    <div className="flex flex-col gap-2">

                        <NavLink to="/" className="hover:text-white"> Home
                        </NavLink>

                        <NavLink to="/invoice" className="hover:text-white" >Create Invoice
                        </NavLink>

                    </div>

                </div>
                <div>

                    <h2 className="text-xl font-bold mb-3"> Contact</h2>

                    <p>Email: invoicebuilder@gmail.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Location: India</p>

                </div>

            </div>

            <div className="border-t border-blue-950 text-center py-4 text-sm">

                © {new Date().getFullYear()} Invoice Builder. All Rights Reserved.

            </div>

        </footer>
    );
};

export default Footer;